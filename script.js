//Navbar 
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}    

//Dark Mode
var icon = document.getElementById("moonIcon");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "images/sun.jpg"; 
} else {
    icon.src = "images/moon.jpg"; 
}

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.jpg";
        localStorage.setItem("theme", "dark"); 
    } else {
        icon.src = "images/moon.jpg";
        localStorage.setItem("theme", "light"); 
    }
};


//Spinner
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
});
