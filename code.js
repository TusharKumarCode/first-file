let x=5;
let y=10;
let z=x+y;
console.log(z);

let btn=document.querySelector("#click");
let change=document.querySelector("body");
let crt=document.createElement("h1");
let frm=document.createElement("input");
let frm1=document.createElement("input");
btn.addEventListener("click",function(){
         change.innerHTML="";
         change.style.background="linear-gradient(to top left,pink,blue,white,skyblue)";
         change.style.height="645px";
         change.appendChild(crt);
         crt.textContent="eiorfoief";
        //  crt.setAttribute("class","text-green-600 text-9xl");
         change.appendChild(frm);
         frm.setAttribute("class","form");
         frm.setAttribute("placeholder","email address");
         crt.style.fontSize="10rem";
         crt.style.color="white";
         change.appendChild(frm1);
         frm1.setAttribute("placeholder","password");
         frm1.style.height="70px";
         frm1.style.width="400px"
         frm1.style.display="block";
         frm1.style.marginTop="100px";
         frm1.style.marginLeft="500px";
         frm1.style.borderRadius="20px";
         frm1.style.fontSize="30px";
         frm1.style.textIndent="10%";
         frm1.style.textTransform="capitalize";
         frm1.style.fontWeight="bold";
});

