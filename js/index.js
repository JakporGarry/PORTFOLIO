
 


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



var i = 0;
var images =[];
var time = 1000

//image list
images[0] = image1.jpg;
images[1] = image2.jpg;
images[2] = image3.jpg;
images[3] = image4.jpg; 
images[4] = image5.jpg;
images[5] = image6.jpg;
images[6] = image7.jpg;
images[7] = image8.jpg;
images[8] = image9.jpg;
images[9] = image10.jpg;

//change image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

  setTimeout("changeImg()", time)
}
window.onload = changeImg

console.log(--bg-image)

const phases = [
    "hello", "everyone", "designer", "artist", "creative", "passionate" 
]

const el = document.querySelector(".text");
const fx = new.TextScramble(el);
let counter = 0;

const next = () =>{
    fx.setText(phrases[counter]).them(() => {
        setTimeout(next, 800)
    })
    counter = (counter +1) % phrases.length
}

next()


function scramble(string){
    var a = string.split(""),
    n = a.length;

    for(var i = n-1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
    }
console.log(scramble("Emumejakpor" + "-" +"Oghenegare"));

var counter = document.querySelector(".counter");
var speed = 200;



document.addEventListener("click", function() {
    var text = document.getElementById("article-text");
    var textSplit = text.innerHTML.split(" ");

    function timeoutFunction(index){
        text.innerHTML = textSplit[index];
        // Recursion
        if(index < textSplit.length - 1){
            setTimeout(function(){
                timeoutFunction(index + 1);
            }, 500);
        }
    }


    timeoutFunction(0);
});





var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}

let str = "abcdefghijklmnopqrstuvwxyz";
const myArr = str.split(" ");
console.log(myArr)

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
 alphabet.forEach(alphabet, function(letter) {
  console.log(letter);
});*/

function changeImg(){
    var time = 10000;
    var num = Math.floor(Math.random() * 17) + 1;
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

/*
var intersectionObserver = new IntersectionObserver(entries => {
  if (entries.some(entry => entry.intersectionRatio > 0)) {
    Roll();
  }
});

intersectionObserver.observe(watcher);*/




const nav = document.querySelector('.navigation');
const headerContainer = document.querySelector('.header-container')
const offset = nav.getBoundingClientRect();

window.addEventListener('scroll', function() {
if (window.pageYOffset > offset.top) {  
    headerContainer.classList.add("nav-fixed-top");
    showNavMenu.style.width = 100 + "%";
    } else {
    headerContainer.classList.remove("nav-fixed-top");
    showNavMenu.style.width = "" ;
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
 
