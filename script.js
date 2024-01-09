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

let rd = document.getElementById("read");

rd.addEventListener("click",()=>{
    console.log("to check read btn")
    document.querySelector(".read-more").style.display = "block";
    document.querySelector("#read").style.display = "none";
})

// For selected button

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.typ');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('selected');
            });

            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });
});