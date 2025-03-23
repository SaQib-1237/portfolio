const humberger = document.querySelector("#humburger");
const navlist = document.querySelector("#navlist");

humberger.addEventListener("click", () => {
    
    navlist.classList.toggle("navlist-active");
})