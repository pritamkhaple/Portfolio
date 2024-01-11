// For Hamburger navigation

let burger = document.getElementById("burg");

burger.addEventListener("click", () => {
    console.log("burger clicked") //just to check
        document.querySelector(".nav").style.display = "flex";
        document.querySelector(".navigation").style.height = "100vh";
        document.querySelector("#burg").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
});

let clos = document.getElementById("closed");

clos.addEventListener("click", ()=>{
    document.querySelector("#burg").style.display = "block";
    document.querySelector(".nav").style.display = "none";
    document.querySelector(".navigation").style.height = "auto";
    document.querySelector(".close").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    console.log("check close")
})


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


let rdButtons = document.getElementsByClassName("read-btn");

for (let i = 0; i < rdButtons.length; i++) {
    rdButtons[i].addEventListener("click", function() {
        console.log("to check read btn");

        let readMore = this.parentElement.querySelector(".read-more");
        let readBtn = this.parentElement.querySelector("#read");

        if (readMore && readBtn) {
            readMore.style.display = "block";
            readBtn.style.display = "none";
        }
    });
}


// For top to btn function

// For Top arrow function

document.addEventListener("DOMContentLoaded", function() {
    let topArrow = document.getElementById("topArrow");

    topArrow.addEventListener("click", () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // You can use "auto" for instant scrolling
        });
    });
});
