function validar (){
    var value = document.getElementById ("userone").value;
    var uservalue = document.getElementById("usertwo").value;
    console.log(value);
    if(value == uservalue){
        if(value == 0 && uservalue == 0){
            swal("¡A ocurrido un error! Probablemente no a ingresado ningún dato");
        }else{
        swal("El usuario que usted ingresó es correcto");
    }
    }else{
        swal("¡A ocurrido un error! Por favor verifiqué el usuario")
    }
}

function verificarpass(){
    var value = document.getElementById ("passone").value;
    var passvalue = document.getElementById("passtwo").value;
    console.log(value);
    if(value == passvalue){
        if(value == 0 && passvalue == 0){
            swal("A ocurrido un error! Por favor ingresé un dato valido");
        }else{
        swal("La contraseña que usted ingresó es correcta");
    }
    }else{
        swal("A ocurrido un error! Por favor verifiqué la contraseña")
    }
}