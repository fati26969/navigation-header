const sidbar=document.querySelector(".sidbar")
const navMobile=document.querySelector(".nav-mobile")
const line1=document.querySelector(".line-1")
const line2=document.querySelector(".line-2")
const line3=document.querySelector(".line-3")


navMobile.addEventListener("click",(e)=>{
     sidbar.classList.toggle("d-block")
     line2.classList.toggle("hidden")
     line1.classList.toggle("rotat1")
     line3.classList.toggle("rotat3")
})