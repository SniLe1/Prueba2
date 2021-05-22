function validar_envio(){
    if (document.getElementById("nombre").value.length == 0){
        alert("Ingrese su Nombre")
        document.getElementById("nombre").focus()

        return 0;
    }

    alert("Dtaros ingresados correctamente");
    document.formulario.submit()

    //Validacion de password

    pass = parseInt(document.getElementById("password"))

    if(pass.length >=8){
        
        var mayus = false;
        var minus = false;
        var num = false;

        for(var i = 0; i < pass.length;i++){
            
            if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90){
                mayus = true;
            }
            else if(pass.charCodeAt(i) >=97 && pass.charCodeAt(i) <= 122){
                minus = true;
            }
            else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57){
                num = true;
            }
            
        }
        
        if(mayus == true && minus == true && num == true){

            return true;
        }
    }
    return false;
    
}

