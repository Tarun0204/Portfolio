var icon = document.getElementById("moonIcon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.jpg";
    } else {
        icon.src = "images/moon.jpg"
    }
}
