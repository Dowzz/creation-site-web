function toggleMenu(){
    var x = document.getElementById("rol-menu");
    console.log(x);
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}