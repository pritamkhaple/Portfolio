// For Major and small projects tab

let button = document.getElementById("majproj");

button.addEventListener("click", () => {
    console.log("Button clicked"); // Just to test the click functionality
    document.querySelector(".small-proj").style.display = "none";
    document.querySelector(".majo-proj").style.display = "block";
});

let buttonn = document.getElementById("smallproj");

buttonn.addEventListener("click", () => {
    console.log("Button clicked"); // Just to test the click functionality
    document.querySelector(".majo-proj").style.display = "none";
    document.querySelector(".small-proj").style.display = "flex";
});

// for read more buttn

let rd = document.getElementsByClassName("read-btn");

rd.addEventListener("click",()=>{
    console.log("to check read btn")
    document.querySelector(".read-more").style.display = "block";
    document.querySelector("#read").style.display = "none";
})

function readd(btnNumber) {
    console.log("to check read btn");
    document.querySelector(`#read-more${btnNumber}`).style.display = "block";
    document.querySelector(`#read${btnNumber}`).style.display = "none";
}

// For Hamburger navigation

// let burger = document.getElementById("burg");

// burger.addEventListener("click", () => {
//     console.log("burger clicked") //just to check
//         document.querySelector(".nav").style.display = "block";
// })

let burger = document.getElementById("burg");
let nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
    console.log("burger clicked"); // Just for checking
    nav.classList.toggle("show");
});

// let clos = document.getElementById("closed");

// clos.addEventListener("click", ()=>{
//     document.querySelector(".mob-nav1-ul").style.display = "none";
//     document.querySelector(".nav-div").style.height = "auto";
//     document.querySelector("#burg").style.display = "block";
//     document.querySelector(".close").style.display = "none";
//     document.querySelector(".banner-txt").style.position = "absolute";
//     console.log("check close")
// })