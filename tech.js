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
let elm=document.createElement('h2');
v.addEventListener('click',function(){
         a.innerHTML="wait";
         a.appendChild(elm);
         elm.textContent="processing..."
        
         
});