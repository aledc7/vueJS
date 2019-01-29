## Simple ejemplo de un archivo HTML que muestra u oculta un div dependiendo si el usuario acepta o no los Términos y Condiciones

el código completo se encientra en esta misma carpeta con formato html

#### En este ejemlo se hace uso de:

- v-model
- v-if
- v-else
- v-show



```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AleDC - v-if - v-else - v-show</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>
<body>



    <div class="container h-100" id="app">
        <p>Propiedades del objeto <b>Vue</b> para fines de debug:</p>
        <div class="border border-danger">
                {{$data}}
        </div>
        <br>
        <br>
        
            <div class="row h-100 justify-content-center align-items-center border border-primary">
              <form class="col-12">
                <div class="form-group">
                  <label>Nombre:</label>
                  <!-- con 'v-model' enlazo este campo de texto a la propiedad nombre del objeto vue que instancié dentro de data -->
                  <input type="text"  v-model="vue.nombre" class="form-control" placeholder="Escriba su nombre">
                </div>
                <div class="form-group">
                  <label>Apellido:</label>
                  <!-- con 'v-model' enlazo este campo de texto a la propiedad nombre del objeto vue que instancié dentro de data -->
                  <input type="text" v-model="vue.apellido" class="form-control" placeholder="Escriba su apellido">
                </div>
                <p>Acepta los Términos y Condiciones?</p>
                <div class="radio">
                    <label class="radio-inline">
                        <!-- con 'v-model' enlazo este input a la propiedad acepta del objeto vue que instancié dentro de data -->
                        <!-- luego los dos puntos antes de value es como usar v-bind:  es para enlazara una expresion en vez de a una cadena -->
                        <input type="radio" v-model="vue.acepta" name="experiencia" value="si" >Si
                    </label>
                    <label class="radio-inline">
                        <!-- con 'v-model' enlazo este input a la propiedad acepta del objeto vue que instancié dentro de data -->
                        <input type="radio" v-model="vue.acepta" name="experiencia" value="no" >No
                    </label>
                </div>
              </form>   
            </div>  
            <br>
            <br>
                <div v-if="!vue.nombre == '' && !vue.apellido == '' ">
                
                    <!-- la directiva 'v-show' muestra algo si una condicion es verdadera -->
                    <div class="alert alert-primary" role="alert" v-show="vue.acepta == 'si'">
                    <b> {{ $data.vue.nombre}} {{$data.vue.apellido}} </b>,  Usted ha <b>Aceptado</b> los Términos y condiciones
                    </div>

                    <!-- la directiva v-if muestra el div solo si la propiedad acepta del objeto vue es igual a la cadena 'no' -->
                    <div class="alert alert-danger" role="alert" v-show="vue.acepta == 'no'">
                        Términos y condciones <b>NO ACEPTADOS !</b>
                    </div>

                </div>

                <div v-else class="alert alert-warning" role="alert">
                    Comppete los campos nombre y appellido
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
            // defino un objeto dentro de data, que en este caso se llama vue, que tendra los componentes con los que trabajo
            vue:{
                acepta:'',
                nombre:'',
                apellido:''
            }
        }

    });
</script>


</body>
</html>
```
