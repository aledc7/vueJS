## Ejemplo de un archivo HTML que recorro un array de objetos usando v-for

El código completo se encientra en esta misma carpeta en el archivo __v-for.html__  basta con descargarlo y estará funcionando.

#### En este ejemlo se hace uso de:

- v-for:




```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AleDC - V-for</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>
<body>
    <h1 class="text-center">V-for en Vue.js2</h1>



    <div class="container h-100" id="app">
        <p>Propiedades del objeto <b>Vue</b> para fines de debug:</p>
        <div class="border border-danger">
                {{$data}}
        </div>
        <br>
        <br>

        <p>Recorriendo un arrray con v-for:</p>
            <div class="row h-100 justify-content-center align-items-center border border-primary">
                    
                
                 <ul>    <!--se le pasa un alias, la palabar 'in' y el nombre del array -->
                    <!-- luego se pone el alias en la interpolacion -->
                    <li v-for="mi_lias in mi_array" >{{ mi_lias }}</li>
                </ul>
            </div>  
            <br>
            <br>


        <p>Recorro el array y ahora imprimo también el índice:</p>
            <div class="row h-100 justify-content-center align-items-center border border-success">
                    
                
                 <ul>    <!--se le pasa un alias, la palabar 'in' y el nombre del array -->
                    <!-- luego se pone el alias en la interpolacion -->
                    <li v-for="(mi_lias, indice) in mi_array" >{{indice + 1}} - {{ mi_lias }}</li>
                </ul>
            </div>
            <br>
            <br>

        <p>uso el v-for para repetir un < template ></p>
            <div class="row h-100 justify-content-center align-items-center border border-warning">
                <template v-for="(mi_lias, indice) in mi_array" >
                    <p>{{indice + 1}} - {{ mi_lias.Titulo }} </p>
                    <hr>
                </template>    
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
            mi_array:[
                {Titulo: 'Primer Tarea',
                pendiente: false
                },
                {Titulo: 'Segunda Tarea',
                pendiente: true
                },
                {Titulo: 'Tercer Tarea',
                pendiente: false
                }
            ]
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
```
