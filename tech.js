let x=5,y=20;
let sum=x+y;
console.log(sum);

let age=30;
if(age>=18){
    console.log("you can vote");
}else{
    console.log('you can not vote');
}

let a =document.querySelector(".divani");
let v =document.getElementById("hit");
let elm=document.createElement('p');
let box=document.createElement('div');
let b=document.querySelector("#scrollfour");
v.addEventListener('click',function(){
         a.innerHTML="<h2>contact</h2>";
         a.appendChild(elm);
         b.appendChild(box);
         box.style.backgroundColor="white"
         elm.textContent="phone number-4569782135"
         elm.style.color="green"
        
               
});