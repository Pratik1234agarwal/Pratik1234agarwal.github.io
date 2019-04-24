let exp=document.getElementById("exp");
let btn=document.getElementById("button");
let answer=document.getElementById("answer");
let a=[];




btn.addEventListener("click",function(){
	//console.log("Hello"+exp.value);
    for(items of exp.value)
	{
		a.push(items);

	}
	exp.value="";
	console.log(a.length);
    let size=a.length;
    let order=['^','*','/','%','+','-'];
    for(let j=0;j<6;j++)
    {
    	
    	for(let i=0;i<size;i++)
    	{

    		if(a[i]==order[j])
    		{
    			let tmp=a[i-1]+a[i+1]+a[i];
    			a[i-1]=tmp;
    			for(let f=i+2;f<size;f=f+1)
    			{
    				let k=a[f];
    				a[f-2]=k;
    				
    			}
    			size=size-2;
    		}
        }
    	
	}
	
	
	answer.appendChild(document.createTextNode(a[0]));
    a=[];


});





