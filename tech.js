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

let ev=document.getElementById("bgcl");
let el=document.querySelector("#scrollthree");
// let bh=document.createElement("div");
let show=document.getElementById("fontcng");
let visb=document.getElementById("seet");
ev.addEventListener('click',function(){
        //  el.innerHTML="";
        //  el.appendChild(bh);
        el.setAttribute("class","bg-dark");
        show.setAttribute("class","text-light");
        visb.setAttribute("class","text-light",);      
});

let btn=document.getElementById("bgch");
// let ex=document.querySelector("#scrollthree");
btn.addEventListener("click",function(){
       el.removeAttribute("class");
       show.removeAttribute("class");
       visb.removeAttribute("class");
});

let stat=document.querySelector('#scrollone');
let td=document.querySelector("#bg");
let val=0;
td.addEventListener("click",function(){
         if(val==0){
            stat.style.backgroundColor="black";
            val=1;
         }else{
            stat.style.backgroundColor="lightpink";
            val=0;
         }  
});
