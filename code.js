let lgbtn=document.getElementById("logbtn");
let lgform=document.getElementById("loginform");

lgbtn.addEventListener("click",function(){
       lgform.setAttribute("class","h-screen w-full fixed top-0 left-0 z-10 flex justify-center items-center bg-[rgba(0,0,0,0.7)] block");
});

lgform.addEventListener("click",function(){
      lgform.setAttribute("class","h-screen w-full fixed top-0 left-0 z-10 flex justify-center items-center bg-[rgba(0,0,0,0.7)] hidden");
});



let red=document.querySelector("#read");
let cotent=document.querySelector("#inht");
let store=document.getElementById("chak");
let vans=document.getElementById("more");
let word=document.createElement("p");
red.addEventListener("mouseover",function(){
          cotent.innerHTML="";         
});

store.addEventListener("click",function(){
         vans.innerHTML="";
         vans.appendChild(word)
         word.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptas, mollitia aut, autem omnis dolor molestiae repellat consequuntur harum sunt error dolore optio corrupti veniam! Alias, ea ad eligendi temporibus porro consectetur excepturi nostrum architecto voluptatibus est? Accusantium quaerat beatae minima vero enim, exercitationem cum quo veritatis nam asperiores ut maxime nisi aliquam tempore ad, voluptatibus ea iure dolor nostrum nobis quia veniam, expedita rem itaque? Voluptatum, fugit quasi doloribus reiciendis molestias laborum vero nesciunt. In aliquid molestias vel odit architecto magni harum aperiam similique rem, velit perspiciatis necessitatibus iure corrupti et nobis dignissimos fuga eos eius commodi, ipsam beatae minima iste esse? Sequi quas iure accusantium illum, sed eius doloribus voluptas tenetur enim sapiente tempora soluta fugiat. Id molestiae obcaecati eaque ullam. Repudiandae ea, consectetur ipsum enim modi ullam itaque maiores. Quibusdam eaque culpa tenetur, necessitatibus quis consequuntur nostrum officiis facere nemo debitis. Atque eos excepturi ipsa vel similique, repellat sapiente, tempora impedit expedita molestias at officiis exercitationem eveniet tempore praesentium assumenda ducimus eum corporis! Laborum quidem, quaerat consectetur earum totam officiis? Quod, quia libero. Architecto eum fuga qui, facere iste rem excepturi officiis eaque tenetur eveniet possimus natus est quis tempora asperiores consequatur! Totam iusto voluptatem quis delectus?"
         word.setAttribute("class","text-2xl text-white capitalize")
         cotent.setAttribute("class","h-auto bg-teal-500")
         vans.setAttribute("class","columns-1")
});

let jam=document.querySelector("#fix");
let place=document.getElementById("search");
let fixicon=document.getElementById('icon');
window.addEventListener("scroll",function(){
           if(window.scrollY>250){
                 jam.setAttribute("class","fixed bg-green-300 top-0 w-full h-20 md:fixed flex justify-center items-center");
                 place.setAttribute('class','w-[450px] h-14 rounded-xl focus:outline-none border-2 text-2xl indent-12');
                 fixicon.setAttribute("class","fa-solid fa-magnifying-glass absolute left-[472px] text-xl top-[39%]");
           }else if(window.scrollY<250){
                jam.setAttribute("class","w-68 md:w-[55%] md:mx-[23%] mx-2 h-20  md:mt-24 rounded-xl  mt-40 flex justify-center items-center relative");
                place.setAttribute('class','w-full h-16 rounded-xl focus:outline-none border-2 text-2xl indent-20');
                fixicon.setAttribute("class","fa-solid fa-magnifying-glass absolute left-12 text-2xl top-7");
           }
});

let vis=document.querySelector("#hovr");
let sp=document.createElement("p");
vis.addEventListener("mouseover",function(){
           document.body.appendChild(sp)
           sp.textContent="click for more";
           sp.style.marginTop="-40px"
});

let ster=document.getElementById("hembg");
let stre=document.querySelector("#visb");
let val=0;

ster.addEventListener("click",function(){
       if(val==0){
          stre.setAttribute("class","absolute top-20 left-20 w-5/6 bg-sky-300 text-center")
          val=1;
       }else{
        stre.setAttribute("class","md:flex justify-evenly items-center md:w-1/2 content-center absolute top-16 end-full  md:static text-center")
        val=0;
       }
       
})




