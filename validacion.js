const boton__nav = document.getElementById("boton__nav");
const navegacion = document.getElementById("navegacion");
const cerrarNav = document.querySelectorAll('.lista__navegacion a[href^="#"]');
const form = document.querySelector('form');
const nombreApellidoInput = document.getElementById('nombreapellido');
const correoElectronicoInput = document.getElementById('correoelectronico');
const actualizar = document.getElementById("actualizar");



boton__nav.addEventListener("click", () => {
    navegacion.classList.toggle("mostrar")
    boton__nav.classList.toggle("mostrar")
})

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
  
   
    if (nombreApellidoInput.value.trim() === '') {
      alert('Por favor, ingresa tu nombre y apellido');
      return;
    }
  
  
    if (correoElectronicoInput.value.trim() === '') {
      alert('Por favor, ingresa tu correo electrónico');
      return;
    }
  
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correoElectronicoInput.value)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }
  
    
    alert('El formulario se ha enviado correctamente');
    form.reset(); // Limpiar el formulario después del envío
  });
  

actualizar.innerHTML = new Date().getFullYear();
console.log(Date());

cerrarNav.forEach(menulink => {
    menulink.addEventListener('click', () => {
        navegacion.classList.remove("mostrar");
        boton__nav.classList.remove("mostrar");
    });
});


function validarDatos(){
    window.event.preventDefault()
     
    if (document.form.nombre.value=="" ) {
        alert("Campo nombre es obligatorio")  
        document.form.nombre.focus()
    
    }else if (document.form.email.value=="") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus() 

    }else if (document.form.asunto.value=="" ) {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus() 

    }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length <= 50 ){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
        document.form.mensaje.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    }
   
}
    document.querySelector('form').addEventListener('submit',validarDatos)