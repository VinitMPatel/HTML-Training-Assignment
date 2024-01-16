const sidebarbtn = document.getElementById("sidebar-btn");
const sidebarcontent = document.getElementById("sidebar-content");
const maincontent = document.getElementById("main-content");
sidebarbtn.addEventListener("click",function(){
    sidebarcontent.style.display = "none";
    maincontent.classList.replace('col-10','col-12')
})