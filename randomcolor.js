let btn=document.querySelector("button");//giving btn acces of button

btn.addEventListener("click",function()//event listener ka bracket should be after flower bracket
{
    let h1=document.querySelector("h1");
      let color=random();
    h1.innerText=color;//changes the inner text

    let div=document.querySelector("div");
    div.style.backgroundColor=color;//this chaging background color of div

    let h3=document.querySelector("h3");
    h3.innerText="color in above box changed";

});

function random(){//we are not writing anything inside random bracket as we are not passing any argument 
    let red=Math.floor(Math.random()*225);//math.floor converts the number to whole also math.randomshould have brackets after its written
    let green=Math.floor(Math.random()*225);
    let blue=Math.floor(Math.random()*225);

    let color=`rgb(${red},${green},${blue})`;//here i wrote it return rgb(num,num,num) which is required for compiler to understand
    return color;

}