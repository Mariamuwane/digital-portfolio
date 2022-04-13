function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


//Get the button:
const mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
window.scroll(scrollFunction())

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

lightMode = document.getElementById("darkButton") 

var lightText = function() {
  document.getElementById("darkButton").textContent = "Light mode"
  // lightMode.textContent("Light mode")

}
lightMode.addEventListener("click", lightText)
lightText;

// var lightText = function() {
//   if (document.lightMode.textContent = "Dark mode"){
//     document.getElementById("darkButton").textContent = "Light mode"
//   }
//   else{
//     document.getElementById("darkButton").textContent = "Dark mode"
//   }
// }

const sections = document.querySelectorAll('.section')
const controls = document.querySelectorAll('.controls')

// buttons
const control = document.querySelectorAll('.control')
const allBody = document.querySelectorAll('.full-content')

