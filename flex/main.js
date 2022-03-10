
/*
window.addEventListener('scroll', () => {
    //var Top = rarebar.scrollTop;
   // console.log(Top)
    if(window.scrollTop == 0) {
        navbar.style.width = "";
        navbar.style.top = ""
        navbar.style.margin = ""
        navbar.style.position = ""
        sidebar.style.borderRadius = "20px"
        navbar.style.paddingTop = ""
    } else {
        navbar.style.width = "100%";
       navbar.style.position = "fixed"
       sidebar.style.borderRadius = "0"
       navbar.style.paddingTop = "0"
    }
});


const navbar = document.querySelector('.sidebar');
const sidebar = document.querySelector('.sidebar-header');

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myPb").className = "sidebar rest";
    document.getElementById("myP").className = "sidebar-header test";
    document.getElementById("column1").style.marginTop = "9rem";
    
  } else {
    document.getElementById("myP").className = "sidebar-header";
    document.getElementById("myPb").className = "sidebar";
    document.getElementById("column1").style.marginTop = "1rem";
  }
}
/*
window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        navbar.style.width = "";
        navbar.style.top = ""
        navbar.style.margin = ""
        navbar.style.position = ""
        sidebar.style.borderRadius = "20px"
    } else {
        navbar.style.width = "100%";
       navbar.style.position = "fixed"
       sidebar.style.borderRadius = "0"
    }
});

const link = document.querySelectorAll(".nav-link");

console.link[0];''


window.onscroll  = function () {
    var rect = sidebar.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    var stop = rect.top
    console.log(stop)
    if(stop <= 0 ){
        navbar.style.width = "100%";
        navbar.style.position = "fixed"
        sidebar.style.borderRadius = "0"
       
    } else {
        navbar.style.width = "";
        navbar.style.top = ""
        navbar.style.margin = ""
        navbar.style.position = ""
        sidebar.style.borderRadius = "20px"
    }
}
*/

const nav = document.querySelector('.sidebar-header');
const offset = nav.getBoundingClientRect();
console.log(nav)

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > offset.top) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.width = 100 + "%";
        nav.style.borderRadius = 0;
        nav.style.background = "black";
       //nav.style.margin = "auto";
        } else {
        nav.style.position = 'relative';
        nav.style.top = '';
       // nav.style.width = "calc(" + 100 + "%" - 2 + "em)";
        //nav.style.width = "calc" + "(" + 100 + "%" + " - " + 2 + "em" + ")"

        nav.style.borderRadius = "20px";
        nav.style.background = "";
        //nav.style.margin = "auto";
        }
      });

let button = document.querySelectorAll(".mobile-menu a");
let content_inside = document.querySelectorAll(".content_inside");

Array.from(button).forEach(function (buttonArray, i) {
  buttonArray.addEventListener("click", function () {
    Array.from(button).forEach((buttonAll) =>
      buttonAll.classList.remove("button_active")
    );

    Array.from(content_inside).forEach((content_insideAll) =>
      content_insideAll.classList.remove("content_inside_active")
    );

    button[i].classList.add("button_active");

    content_inside[i].classList.add("content_inside_active");
  });
});

console.log(button)
console.log(content_inside)