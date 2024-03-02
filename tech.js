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

let pack=document.querySelector("#trg");
let hebo=document.querySelector("#oijh");
let store=document.createElement("p");
pack.addEventListener("mouseover",function(){
           hebo.innerHTML="";
           store.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci amet optio ducimus maxime ab animi eum commodi provident culpa atque ad unde cumque ratione sapiente vero, ipsa mollitia pariatur repellat explicabo. Possimus vel laboriosam, est temporibus fugit debitis architecto assumenda esse odio rem nesciunt libero tenetur? Beatae in nemo et labore, nobis voluptas, dignissimos fugiat mollitia quia natus, velit laudantium! Temporibus distinctio illum ipsam dignissimos quibusdam! Error atque esse iste minima id itaque, hic eligendi cumque doloremque voluptatibus distinctio ratione explicabo rerum molestias nemo optio blanditiis similique dignissimos dolorum magnam vero nulla? Voluptatibus, quaerat culpa? Sint non quia dolorem temporibus, impedit esse, fugit magnam excepturi quae illum enim id? Illum, exercitationem eligendi quae eveniet autem sunt assumenda illo ipsa similique atque dignissimos, numquam unde vel reiciendis fugit saepe totam laboriosam dolorum nesciunt cumque soluta? Provident accusamus modi, magnam totam, quia asperiores tempora minima dolore delectus expedita ad non deleniti autem ducimus nostrum incidunt vitae minus, numquam blanditiis dolorum libero pariatur nihil! Officia, beatae deserunt eos assumenda non iusto placeat.";
           hebo.appendChild(store);
           hebo.style.backgroundColor="darkturquoise";
           store.style.fontSize="15px";
           store.style.textTransform="uppercase";
           store.style.color="white";
           hebo.style.height="auto";
});
