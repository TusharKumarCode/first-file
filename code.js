let x=5;
let y=10;
let z=x+y;
console.log(z);

let btn=document.querySelector("#click");
let change=document.querySelector("body");
let crt=document.createElement("h1");
let frm=document.createElement("input");
let frm1=document.createElement("input");
let log=document.createElement("button");
btn.addEventListener("click",function(){
         change.innerHTML="";
         change.style.background="linear-gradient(to top left,pink,blue,white,skyblue)";
         change.style.height="645px";
         change.appendChild(crt);
         crt.textContent="webname";
        //  crt.setAttribute("class","text-green-600 text-9xl");
         change.appendChild(frm);
         frm.setAttribute("class","form");
         frm.setAttribute("placeholder","email address");
         crt.style.fontSize="6rem";
         crt.style.color="white";
         change.appendChild(frm1);
         frm1.setAttribute("placeholder","password");
         frm1.style.height="50px";
         frm1.style.width="434px"
         frm1.style.display="block";
         frm1.style.marginTop="50px";
         frm1.style.marginLeft="500px";
         frm1.style.borderRadius="8px";
         frm1.style.fontSize="20px";
         frm1.style.textIndent="10%";
         frm1.style.textTransform="capitalize";
         frm1.style.fontWeight="bold";
         change.appendChild(log);
         log.textContent="sign in";
         log.setAttribute("class","hit");
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
window.addEventListener("scroll",function(){
           if(window.scrollY>0){
                 jam.setAttribute("class","postn");
           }else{
               jam.setAttribute("class","bg-white w-3/4 h-16 ml-40 mt-24 rounded-xl")
           }
});

