
const hideBoton = document.getElementById('hide-boton');
let hideImag = document.getElementById('hide-imag');

 hideBoton.addEventListener('click', 
() => {
    let hideImage = document.getElementById('hide-imag');
    let currentDisplay = hideImage.style.display;

    if (currentDisplay ==='none') {
        hideImage.style.display = 'block';
    } else{
        hideImage.style.display = 'none';
    }
})
 

/* Ocultando imagen al pasar el mouse*/

