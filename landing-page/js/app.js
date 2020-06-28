/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const nav = document.querySelector("ul");
const sec = document.querySelectorAll("section");
let items = [];
let prevHighlight = sec[0];
let prevItem = null;
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function getElement() {
  for (let i = 0; i < sec.length; i++) {
    let bound = sec[i].getBoundingClientRect();

    /*This calculates the vertical height of the element , 
      this will we necessary if there's section with different height */
    let limit = bound.bottom - bound.top;

    if (bound.top >= -limit / 2 && bound.top < 0.4 * window.innerHeight) {
      return [sec[i], items[i]];
    }
  }
  return null;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
function scrolling(event) {
  if (event.path[0].tagName === "LI") {
    const temp = event.path[0];
    sec[parseInt(temp.getAttribute("data-section")) - 1].scrollIntoView({
      behavior: "smooth",
    });
  }
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
nav.addEventListener("click", scrolling);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

for (let i = 0; i < sec.length; i++) {
  let item = document.createElement("li");
  item.textContent = "Section " + (i + 1);
  item.classList.add("menu__link");
  item.setAttribute("data-section", i + 1);
  nav.appendChild(item);
}

// items are added to the list
items = document.querySelectorAll("#navbar__list li");
prevItem = items[0];
prevItem.classList.add("menu__active");
// Scroll to section on link click

// Set sections as active

document.addEventListener("scroll", function () {
  let result = getElement();
  if (result != null) {
    let ele, item;
    [ele, item] = getElement();
    if (ele !== prevHighlight) {
      prevHighlight.classList.remove("your-active-class");
      prevItem.classList.remove("menu__active");
      ele.classList.add("your-active-class");
      item.classList.add("menu__active");
      prevHighlight = ele;
      prevItem = item;
    }
  }
});
