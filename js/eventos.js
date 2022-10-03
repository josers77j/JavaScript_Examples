window.onload = iniciar;
function iniciar(){
    var textFieldFocus = document.frmEjemplo.txtfoco;
    textFieldFocus.onfocus = foco;

    var textFieldKey = document.frmEjemplo.txttecla;
    textFieldKey.onkeypress = tecla;

    var selectField = document.frmEjemplo.selopciones;
    selectField.onchange = function(){
        cambioOpcion(this.options[this.selectedIndex].value);
    };
    var chkbox = document.getElementById("chkbox1");
    chkbox1.addEventListener("click", function(){
        activarCasilla(chkbox1, chkbox1.value);
    }, false);

    var chkbox2 = document.getElementById("chkbox2");
    chkbox2.addEventListener("click", function(){
        activarCasilla(chkbox2, chkbox2.value);
    }, false);

    var chkbox3 = document.getElementById("chkbox3");
    chkbox3.addEventListener("click", function(){
        activarCasilla(chkbox3, chkbox3.value);
    }, false);

    // Botón de envío del formulario
var submitButton = document.getElementById("submitbutton");
submitButton.addEventListener( "click", function(){
    alert(pulsa());
    return false;
    },false) ;    
}
function foco(){
    alert("FOCO en la primera caja");
}
function tecla(){
    alert ("Pulsaste una tecla");
    this.focus;
}
function cambioOpcion (nuevaOpcion) {
alert("has cambiado a la nueva opcion " + nuevaOpcion) ;
}
function activarCasilla (Casilla, valorCasilla) {
    var accion;
    //alert (casilla. checked) ;
    (Casilla.Checked) ? accion = " activado " : accion = " desactivado ";
    alert("Se ha" + accion +  "la casilla con la opción " + valorCasilla)
}

function pulsa() {
    return "Materia: Lenguajes Interpretados en el Cliente";    
}

