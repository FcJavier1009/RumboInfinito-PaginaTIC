document.getElementsByClassName('subcolumna').addEventListener("mouseover", function(){
    this.style.transform = "scale(1.2)";
})
document.getElementsByClassName('subcolumna').addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
})
document.querySelector('#sesion').addEventListener('click', function(){
    window.location.replace("../HTML/inicio_sesion.html");
});
document.querySelector('#ofertas').addEventListener('click', function(){
    window.location.replace("../HTML/ofertas.html");
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