
document.querySelector('#sesion').addEventListener('click', function(){
    window.location.replace("HTML/inicio_sesion.html");
});
document.querySelector('#ofertas').addEventListener('click', function(){
    window.location.replace("HTML/ofertas.html");
});
document.querySelector('#galeria').addEventListener('click', function(){
    window.location.replace("HTML/galeria.html");
});
document.querySelector('#opiniones').addEventListener('click', function(){
    window.location.replace("HTML/reviews.html");
});
document.querySelector('#recomendaciones').addEventListener('click', function(){
    window.location.replace("HTML/recomendaciones.html");
});
document.querySelector('#claro').addEventListener('click', function(){
    document.body.style.background='radial-gradient( #f4ddb1 , #cd9857)';
});

document.querySelector('#oscuro').addEventListener('click', function(){
    document.body.style.background = 'radial-gradient( #0b224e, #3267a8)';
});