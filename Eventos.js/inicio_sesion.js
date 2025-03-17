
document.querySelector('#ofertas').addEventListener('click', function(){
    window.location.replace("../HTML/ofertas.html");
});
document.querySelector('#galeria').addEventListener('click', function(){
    window.location.replace("../HTML/galeria.html");
});
document.querySelector('#opiniones').addEventListener('click', function(){
    window.location.replace("../HTML/reviews.html");
});
document.querySelector('#inicio').addEventListener('click', function(){
    window.location.replace("../index.html");
});
document.querySelector('#recomendaciones').addEventListener('click', function(){
    window.location.replace("../HTML/recomendaciones.html");
});
document.querySelector('#Claro').addEventListener('click', function(){
    document.body.style.background='radial-gradient( #f4ddb1 , #cd9857)';
});

document.querySelector('#Oscuro').addEventListener('click', function(){
    document.body.style.background = 'radial-gradient( #0b224e, #3267a8)';
});
const botones = document.querySelectorAll("input");
botones.forEach(input => {
    input.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
        this.style.transition = "transform 0.3s ease";
        this.style.backgroundColor = "#cd9857";
    });
    input.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
        this.style.backgroundColor =  "#f4ddb1" ;
    });
});
