<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AleDC - Plantilla para Documentar</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>
<body>
    <h1 class="text-center">Plantilla Para Documentar</h1>



    <div class="container h-100" id="app">
        <p>Propiedades del objeto <b>Vue</b> para fines de debug:</p>
        <div class="border border-danger">
                {{$data}}
        </div>
        <br>
        <br>

        <p>Texto 1:</p>
            <div class="row h-100 justify-content-center align-items-center border border-primary">
                    
                

            </div>  



        <p>Texto 2:</p>
            <div class="row h-100 justify-content-center align-items-center border border-success">
            
            
            </div>


        <p>Texto 3:</p>
            <div class="row h-100 justify-content-center align-items-center border border-warning">
  
            
            </div>


           </div> <!--fin main container -->



    
    <!-- este es el CDN para que funcione Vue.js, tiene que ir antes del script de vue, en el final del body -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>


<!-- dentro de esta etiqueta script va todo el código de vue.js -->
<script>
    // primero instancio in objeto vue en la variable vm, puede ser cualquier otro nombre de variable
    var vm = new Vue({
        // defino en donde tendrá accion mi objeto de vue, en este caso en el div que tenga la id 'app'
        el: "#app",
        // defino la propiedad data en donde deben estar todos los componentes con los que me encuentre trabajando.
        data:
        {
            // aca va toda la data
        },
        computed:
        {
            // aca van las propiedades dinámicas
        },
        methods:
        {
            // acá van los métodos
        }
    });




</script>

<!-- Footer con copuright para que se actualice el año solo -->
<div class="footer-copyright text-center py-3">
    <script>
        var fecha = new Date();
        var anio = fecha.getFullYear();
        document.write("<b>Aledc</b> &copy " + anio)
    </script>
        
        <br>
        follow me on <a href="https://github.com/aledc7" target="_blank"><b>Github</b></a>
</div>


</body>
</html>
