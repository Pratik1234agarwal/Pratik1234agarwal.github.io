
//Sidenav
console.log("Hello")

const sidenav = document.querySelector(".sidenav");

M.Sidenav.init(sidenav,{});


//slider
const slider = document.querySelector('.slider');

M.Slider.init(slider,{
    indicators:false,
    height:500,
    transition:500,
    interval:6000
});


// Autocomplete input

const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac,{
    data:{
        "Aruba":null,
        "Florida":null,
        "California":null,
        "Europe":null,
        "Jamaica":null,
        "Delhi":null,
        "Mumbai":null,
        "Goa":null,
}
});


// Material Boxed

const box = document.querySelectorAll('.materialboxed');
M.Materialbox.init(box,{});



//Scroll Spy

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{});