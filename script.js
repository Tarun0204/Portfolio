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
