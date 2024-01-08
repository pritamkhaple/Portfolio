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

let rd = document.getElementById("read");

rd.addEventListener("click",()=>{
    console.log("to check read btn")
    document.querySelector(".read-more").style.display = "block";
    document.querySelector("#read").style.display = "none";
})