## Ejemplo de un archivo HTML que agrega tareas a una lista de Tareas

El código completo se encuentra en esta misma carpeta en el archivo __Eventos.html__  basta con descargarlo y estará funcionando.

#### En este ejemplo se hace uso de:

- v-on 
- v-model  


La directia __v-on__ ejecutará alguna acción cuando ocurra algun evento. Este evento se lo tenemos que indicar nosotros... por ejemplo, si queremos que cuando se haga click en un boton se ejecute un método, una posible forma sería la siguiente:
```js
<button class="btn btn-primary" v-on:click="crear_Tarea" >Crear tarea</button>
```
entonces cuando se le dé click en el boton, se ejecutará el método crear_Tarea.

Este método debe estar en nuestro objeto VM, dentro de __methods__  como se verá en el ejemplo.

NOTA: es posible abreviar la directiva __v-on__ con el signo de arroba __@__ , de esta manera la misma linea de arriba quedaría de esta manera:
```js
<button class="btn btn-primary" @:click="crear_Tarea" >Crear tarea</button>
```



```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AleDC - Manejo de Eventos</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>
<body>
    <h1 class="text-center">Manejo de Eventos</h1>



    <div class="container h-100" id="app">
        <p>Propiedades del objeto <b>Vue</b> para fines de debug:</p>
        <div class="border border-danger">
                {{$data}}
        </div>
        <br>
        <br>

        <p>LISTADO DE TAREAS:</p>
            <div class="row h-100 justify-content-center align-items-center border border-primary">
                    
                    
                    <ul>    <!--se le pasa un alias, la palabar 'in' y el nombre del array -->
                        <!-- luego se pone el alias en la interpolacion -->
                        <li v-for="mi_lias in mi_array" >{{ mi_lias.Titulo }}</li>
                    </ul>


            </div>  



        <p>Texto 2:</p>
            <div class="row h-100 justify-content-center align-items-center border border-success">
            
                    <br>
                    <br>
                    <br>
                    <br>
                    
                    <!-- enlazo este campo de texto a la propiedad tarea_nueva -->
                    <input type="text" v-model="tarea_nueva" class="form-control" v-on:keyup.enter="crear_Tarea">
                    
                    <!-- cuando se haga click ejecuta el metodo crear_Tarea -->
                    <!-- se puede usar todos los eventos disponibles en javascript -->
                    <!-- recuerden que usar v-on se puede abreviar usando la arroba @ -->
                    <button class="btn btn-primary" v-on:click="crear_Tarea" >Crear tarea</button>
                    
                    <br>
                    <br>
    
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
        data:{
            mi_array:
            [
                {Titulo: 'Primer Tarea',
                pendiente: false
                },
                {Titulo: 'Segunda Tarea',
                pendiente: true
                },
                {Titulo: 'Tercer Tarea',
                pendiente: false
                }

            ],
            tarea_nueva:''
        },
        computed:
        {
            // acá van todas las propiedades dinámicas.
        },
        methods:
        {
            crear_Tarea: function(){
                // meto en el array un nuevo elemento, capturado de tarea_nueva
                this.mi_array.push({Titulo: this.tarea_nueva , pendiente: true});

                // limpio el campo del formulario para que el usuario escriba de nuevo
                this.tarea_nueva = '';
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
```
