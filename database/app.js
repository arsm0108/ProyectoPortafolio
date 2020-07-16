$(document).ready(function(){
    $('#save').click(function(){

        var datauser = $('obtenerdatos').serialize();
        $.ajax({
            type :"POST",
            url :"guardar.php",
            data: datauser,
            success: function(res){
                if(res == 1){
                    alert("se han registrado los datos");

                }
                else{
                    alert ("falla en la lectura");
                }

            }
        });
        return false
    })
})