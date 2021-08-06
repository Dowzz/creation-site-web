//affichage du menu hamburger
function toggleMenu(){
    var x = document.getElementById("rol-menu");
    if(x.style.display === "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
//affichage d'une page par defaut
window.addEventListener('load', function(){
    $('#content').load("PAGES/who.html")
})
//loader de la div content
$(() =>{
    $(document.getElementsByClassName("loader")).click(function(e){
        e.preventDefault();
        url=(this.href);
        console.log(url);
        $.get(url, function(data) {
            $('#content').html(data);
            if (window.matchMedia("(max-width: 1250px)").matches) {
                document.getElementById('check')
                .dispatchEvent(new MouseEvent('click', {shiftKey: true}));
                
            }
            
        })
    })
});

