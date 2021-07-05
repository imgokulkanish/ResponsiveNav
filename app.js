const $burger=document.querySelector(".burger")
console.log($burger)
const $navLinksContainer=document.querySelector(".nav-links-container")
console.log($navLinksContainer)
const $navLinks=document.querySelectorAll(".nav-links-container li")
console.log($navLinks)
$burger.onclick=()=>{
    $navLinksContainer.classList.toggle("nav-clicked")
    $burger.classList.toggle("burger-clicked")
    $navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=""
        }else{
            link.style.animation=`navLinkAnimation 0.5 ease forwards ${index/5+0.5}s`;
        }
    });
};
