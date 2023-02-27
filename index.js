
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 20);
});

function toggle(){
  var element = document.getElementById("barnav");
  if(element.style.display === "none"){
      element.style.display = "flex";
  } else {
      element.style.display = "none";
  }
}
