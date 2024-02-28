let x=5;
let y=10;
let z=x+y;
console.log(z);

let btn=document.querySelector("#click");
let change=document.querySelector("body");

btn.addEventListener("click",function(){
         change.innerHTML="<form><input placeholder=myname></form>";
         change.style.background="linear-gradient(to top left,pink,blue,white,skyblue)";
         change.style.height="645px";
         
});

