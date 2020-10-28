window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2;
    
    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 7s ease-out'
    }
    
}
)

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado2');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/2;
    
    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'arriva 7s ease-out'
    }
    
}
)