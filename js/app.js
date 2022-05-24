particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 8,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 20
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


/*
console.log(window.getComputedStyle(document.documentElement).getPropertyValue("--text", "blue"))


document.getElementById("dark").addEventListener("click", () =>{
    document.documentElement.style.setProperty("--bg-color", "black")
    console.log("dark")
})

document.getElementById("light").addEventListener("click", () =>{
    document.documentElement.style.setProperty("--bg-color", "white")
    console.log("light")
})


let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.querySelector("#darkToggle")

const enableDarkMode = () => {
    document.body.classlist.add("darkMode");
    localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
    document.body.classlist.remove("darkMode");
    localStorage.setItem("darkMode", null)
}

darkModeToggle.addEventListener("click", ()=>{
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
})


*/

function changeImg(){
  var time = 10000;
  var num = Math.floor(Math.random() * 10) + 1;
  var page2 = document.querySelector("#particles-js"); 
  page2.style.backgroundImage = `url("./Images/image${num}.JPG")`;
  setTimeout("changeImg()", time)
}

window.onload = changeImg()


var text = "Emumejakpor Oghenegare"
var i = 0,text;
function typing() {    
  if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50)
  }
}

window.onload = typing()


//If innerwidth is less than 832 nad inner height is less than 422 let hero be 80vh else let it be 80%

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log(h)


function getViewport() {

var viewPortWidth;
var viewPortHeight;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
if (typeof window.innerWidth != 'undefined') {
 viewPortWidth = window.innerWidth,
 viewPortHeight = window.innerHeight
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
else if (typeof document.documentElement != 'undefined'
&& typeof document.documentElement.clientWidth !=
'undefined' && document.documentElement.clientWidth != 0) {
  viewPortWidth = document.documentElement.clientWidth,
  viewPortHeight = document.documentElement.clientHeight
}

// older versions of IE
else {
 viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
 viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
}
return [viewPortWidth, viewPortHeight];
}

window.onload = getViewport()


if(window.NodeList && !NodeList.prototype.forEach){
NodeList.prototype.forEach = Array.prototype.forEach;
}

//HAMBURGER
const menuBtn = document.querySelector(".menu-btn");
let showNavMenu = document.querySelector(".mobile-nav-menu");
let menuClose = document.querySelectorAll(".menuLink");


function togglehamburger() {
menuBtn.classList.toggle("open"); //to toggle menu button animation
showNavMenu.classList.toggle("show"); // to show nav
}
menuBtn.addEventListener("click", () => {
togglehamburger();
});

menuClose.forEach( 
function(menuLink) { 
  menuLink.addEventListener("click", togglehamburger) 
}
);

//if screen width is bigger than 768px close hamburger

var logWidth = function () {
var viewportWidth;
viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 770) {
  menuBtn.classList.remove("open"); //to toggle menu button animation
  showNavMenu.classList.remove("show"); // to show nav
} else{
  content_inside_active
}
}

// On resize events, recalculate and log
window.addEventListener('resize', function () {
logWidth();
}, false);


//COUNTER
var watcher = document.querySelector(".counters")
var counters = document.querySelectorAll(".counter")
var speed = 200;

function Roll() {
  counters.forEach(counter =>{
  const updateCount = () => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;
  const inc = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1)
    } else{
      count.innerText = target;
    }
  }
  updateCount ();
})
};


var intersectionObserver = new IntersectionObserver(entries => {
if (entries.some(entry => entry.intersectionRatio > 0)) {
  Roll();
} 
});

intersectionObserver.observe(watcher);




const nav = document.querySelector('.navigation');
const headerContainer = document.querySelector('.header-container')
const offset = nav.getBoundingClientRect();

function fixedNav(){
window.addEventListener('scroll', function() {
  if (window.pageYOffset > offset.top) {  
      headerContainer.classList.add("nav-fixed-top");
      showNavMenu.style.width = 100 + "%";
      } else {
      headerContainer.classList.remove("nav-fixed-top");
      showNavMenu.style.width = "" ;
      }
  });
}
fixedNav()


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
     
    window.scrollTo(0, 0);
  
    headerContainer.classList.remove("nav-fixed-top");
    showNavMenu.style.width = "" ;
    
    // location.reload(true);
  });
});

