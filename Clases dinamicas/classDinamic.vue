<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AleDC - Dinamic Class</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>
<body>
    <h1 class="text-center">Clases Dinámicas con Vue.js 2</h1>



    <div class="container h-100" id="app">
        <p>Propiedades del objeto <b>Vue</b> para fines de debug:</p>
        <div class="border border-danger">
                {{$data}}
        </div>
        <br>
        <br>
        <p><b>Clases Dinámicas</b>, depende de lo que se seleccione, se incluirá dinamicamente una clase de bootstrap en cada linea de texto.</p>

        
            <div class="row h-100 justify-content-center align-items-center border border-primary">
                    <div class="input-group-text">
                        <select v-model="vue.selected">
                            <option disabled value="">elija una clase</option>
                            <option>Success</option>
                            <option>Info</option>
                            <option>Warning</option>
                            <option>Danger</option>
                        </select>
                    </div>
                    <br>
                    <br>


                    <div class="container">
                            <div v-bind:class="{'alert alert-success' : vue.selected == 'Success'}">
                              <strong>Success!</strong> This alert box could indicate a successful or positive action.
                            </div>
                            <div v-bind:class="{'alert alert-info' : vue.selected == 'Info'}">
                              <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                            </div>
                            <div v-bind:class="{'alert alert-warning' : vue.selected == 'Warning'}">
                              <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                            </div>
                            <div v-bind:class="{'alert alert-danger' : vue.selected == 'Danger'}" >
                              <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                            </div>
                    </div>
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
        data:{
            vue:{
                selected: ''
            }
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
