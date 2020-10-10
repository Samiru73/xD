let indice = 1;
muestraSliders(indice);

function avanzaSlide(n){
   muestraSliders(indice+=n);
}

function posicionSlide(){
    muestraSliders(indice=n);
}

setInterval(function tiempo(){
    muestraSliders(indice+=1)
},7000);

function muestraSliders(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barra = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }

    if (n < 1){
        indice = slides.length();
    }

    for(i = 0; i < slides.length; i++){
        slides[i].styles.display = "none";
    }
    for(i = 0; i < barras.length; i++){
        barra[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = "block";
    barra[indice-1].className += " active";

}