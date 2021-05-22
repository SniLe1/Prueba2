function findMe(){
    var output = document.getElementById('map')

    //Verificacr si soporta geolocalizacion
    if (navigator.geolocation){
        output.innerHTML = "<p>Tu navegador soporta geolocalizacion</p>"
    }else{
        output.innerHTML = "<p>Tu navegador no soporta geolocalizacion</p>"
    }

    //Obtenemos latitud y longitud
    function localizacion(posicion){
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude;

        var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyDNxNHU8hlZgwB69AbiMJVheX3KDqSUfhs";
        
        output.innerHTML = "<img src=' "+imgURL+" ' >";
    }

    function error(){
        alert("No se pudo obtener su ubicaion");
    }
    
    navigator.geolocation.getCurrentPosition(localizacion,error);
}



$(document).ready(function(){
    $('#datosDelClima').hide();

});

function cargar_clima(){
    //1. LLamada a WS y lectura de JSON

    var clima = new XMLHttpRequest();
    var ciudad = document.getElementById("ciudad").value;

    clima.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=8fefcdc4f65e87fdd7c08f9e34215dc5&units=metric', false);
    clima.send(null);

    //2. Capturar los datos

    var datos = JSON.parse(clima.response);

    var ciudad = datos.name;
    var temperatura = datos.main.temp_min;
    var humedad = datos.main.humidity;
    var velocidadViento = datos.wind.speed;

    //3. Disponer datos capturados

    $('#ubicacion').html(ciudad);
    $('#temperatura').html(temperatura);
    $('#humedad').html(humedad);
    $('#velocidadViento').html(velocidadViento);

    $('#ciudad').val('');

    $('#datosDelClima').show();

}
