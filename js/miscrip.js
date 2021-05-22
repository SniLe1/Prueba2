function validar_envio(){
    if(document.getElementById("nombre").value.length == 0){

        alert("Ingrese su nombre")
        document.getElementById("nombre").focus()

        return 0;
    }

    edad = parseInt(document.formulario.edad.value)
    
    if(isNaN(edad)){
        edad = ""
        alert("Debe ingresar correctamente su edad")
        document.formulario.edad.focus()

        return 0;
    }else{
        if(edad < 18){
            alert("Debe ser mayor de 18 años")
            document.formulario.edad.focus()
    
            return 0;
        }
    }

    alert("Datos ingresados correctamente");
    document.formulario.submit()

}