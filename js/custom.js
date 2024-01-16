const sidebarbtn = document.getElementById("sidebar-btn");
const sidebarcontent = document.getElementById("sidebar-content");
const maincontent = document.getElementById("main-content");
var flag = 0;
sidebarbtn.addEventListener("click",function(){
    if(flag==0){
        sidebarcontent.style.display = "none";
        maincontent.classList.replace('col-md-10','col-md-12');
        flag = 1;
    }
    else{
        sidebarcontent.style.display = "flex";
        maincontent.classList.replace('col-md-12','col-md-10');
        flag = 0;
    }
})