function toggleMenu(){
    var x = document.getElementById("mylinks");
    console.log(x);
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}