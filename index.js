

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 20);
});


var nav1 = document.getElementById("mybanner");
var nav2 = document.getElementById("barnav")
var header = document.querySelector('header')

if (window.matchMedia("(min-width: 580px)".matches)) {
    nav1.className = "bigban";
    nav2.className = "bigmenu";
    header.className = "big";
} else {
    nav1.className = "smlban";
    nav2.className = "smlmenu";
    header.className = "small";
}

// function toggle(){
//   var element = document.getElementById("barnav");
//   if(element.style.display === "none"){
//       element.style.display = "flex";
//   } else {
//       element.style.display = "none";
//   }
// }
