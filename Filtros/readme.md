## Ejemplo del uso de Filtros

El código completo se encientra en esta misma carpeta en el archivo __Filtros.html__  basta con descargarlo y estará funcionando.

#### En este ejemlo se hace uso de:

- v-on 
- v-model
- filters:{}  # declarado dentro del objeto Vue 


Los filtros son una caracteristica de VUE que permite modificar las interpolaciones de texto, justo antes de que estas se impriman en pantalla.  
Los filtros se agregan mediante el caracter pipe |  seguido del nombre del filtro que debemos crear como una propiedad dentro del objeto de Vue




```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AleDC - Filtros</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>
<body>
    <h1 class="text-center">Uso de Filtros en Vue.js</h1>



    <div class="container h-100" id="app">
        <p>Propiedades del objeto <b>Vue</b> para fines de debug:</p>
        <div class="border border-danger">
                {{$data}}
        </div>
        <br>
        <br>

        <p>Texto 1:</p>
            <div class="row h-100 justify-content-center align-items-center border border-primary">
                    
                <div class="welcome">
                    Bienvendo {{ nombre | filtro1 | filtro2 }}
                    
                    <p>{{23390 | filtro_Money }}</p>
                </div>
                

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

<!-- Este CDN pertenece a una libreria de Javascript para formatear numeros  ( http://numeraljs.com )  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>



<!-- dentro de esta etiqueta script va todo el código de vue.js -->
<script>
    // primero instancio in objeto vue en la variable vm, puede ser cualquier otro nombre de variable
    var vm = new Vue({
        // defino en donde tendrá accion mi objeto de vue, en este caso en el div que tenga la id 'app'
        el: "#app",
        // defino la propiedad data en donde deben estar todos los componentes con los que me encuentre trabajando.
        data:{
            nombre: 'Alejandro De Castro'

        },
        computed:
        {
            // aca van las propiedades dinámicas
        },
        methods:
        {
            // acá van los métodos
        },
        filters:
        {
            // cada funcion debe recibir un argumento, que será el valor que esté antes del signo | dentro de la interpolacion
            filtro1: function(nombre){
                return nombre.toUpperCase();
            },
            filtro2: function(nombre){
                return 'Ing. ' + nombre;
            },
            // creo un filtro usando la librería de Javascript
            filtro_Money: function(nombre){
                return numeral(nombre).format('0,0.0');
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
