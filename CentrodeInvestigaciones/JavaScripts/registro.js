    document.getElementById("Registro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores de nombre y apellido
    let nombre = document.getElementById("Name").value;
    let apellido = document.getElementById("Apellidos").value;
    let area = document.getElementById("area").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
   
    
    // PRUEBA DE QUE SI LLEGAN AL JAVA
    
    console.log(nombre);
    console.log(apellido);
    console.log(area);
    console.log(correo);
    console.log(password);


    
  
    // // Crea un objeto con los datos a enviar
    // var data = {
    //     nombre: nombre,
    //     apellido: apellido,
    //     area: area,
    //     correo: correo,
    //     password: password,
    // };

    // // Convierte el objeto a una cadena JSON
    // var jsonData = JSON.stringify(data);

    // // Crea una instancia de XMLHttpRequest
    // var xhr = new XMLHttpRequest();

    // // Configura la solicitud AJAX
    // xhr.open("POST","php/registro.php", true);
    // xhr.setRequestHeader("Content-Type", "application/json");

    // // Define la función de callback para la respuesta del servidor
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //         var response = xhr.responseText;
    //         console.log(xhr.readyState);
    //         console.log(response);

    //     }
    // };

    // // Envía la solicitud AJAX con los datos en formato JSON
    // xhr.send(jsonData);
    
});