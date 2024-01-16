// For Hamburger navigation

let burger = document.getElementById("burg");

burger.addEventListener("click", () => {
    console.log("burger clicked") //just to check
        document.querySelector(".navv").style.display = "flex";
        document.querySelector(".navigation").style.height = "100vh";
        document.querySelector("#burg").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
});

let clos = document.getElementById("closed");

clos.addEventListener("click", ()=>{
    document.querySelector("#burg").style.display = "block";
    document.querySelector(".navv").style.display = "none";
    document.querySelector(".navigation").style.height = "auto";
    document.querySelector(".close").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    console.log("check close")
})

// Get all list items inside the navigation
// let navItems = document.querySelectorAll('.nav-ul li');

// Add click event listener to each list item
// navItems.forEach(item => {
//     item.addEventListener('click', () => {
//         document.querySelector(".navv").style.display = "none";
//         document.querySelector(".navigation").style.height = "auto";
//         document.querySelector("#burg").style.display = "block";
//         document.querySelector(".close").style.display = "none";
//         document.querySelector("body").style.overflow = "auto";
//     });
// });

// click event listener to li only mob view
if (window.innerWidth <= 768) { 
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector(".navv").style.display = "none";
            document.querySelector(".navigation").style.height = "auto";
            document.querySelector("#burg").style.display = "block";
            document.querySelector(".close").style.display = "none";
            document.querySelector("body").style.overflow = "auto";
        });
    });
}

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
