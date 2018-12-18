# Diccionario propio de Vue.js
## Este diccionario es el resumen de la capacitacion sobre los videos de Vue.js que me encuentro realizando.


###### Vue.js crea un DOM virtual de manera que utiliza esta para ser reactivo y hacer todo lo que hace.

### v-model
> La directiva v-model enlaza cualquier elemento HTML a la instancia de view que debo haber instanciado previamente.
> 
> En el ejemplo de abajo estoy enlazando un radiobuton a la propiedad 'exp' del objeto Vue.
> Cabe mencionar que es necesario definir las prpioedades que se vayan a utilizar, esto debe hacerse luego de la instanciacion del objeto Vue.
```javascript
<input type="radio" v-model="vue.exp" :value="true">
```

### {{}}
Lo que está entre llaves dobles se lo denomina interpolacion


### Instancia basica de un vue
```javascript
<script type="text/javascript">
    // instancia de objeto vue en una variable "vm"
    var vm = new Vue({
      //es necesario enlazarlo a un elemento
      el: '#app',
      // en el data se deben definir todas las propiedades que se vayan a utilizar, aunque sea definirlas vacias.
      data: {
        name: ''
      }
    });

    // accedo a los miembros del objeto instanciado, en este caso al miembro name del objeto.
    vm.name = "Ingenea S.R.L.";
  </script>
```



### v-for
Ejemplo de uso de un for en vue


```javascript
<li v-for="x in miarray">
      {{ x.text }}
</li>


myObject = new Vue({
  el: '#app',
  data: {
    miarray: [
      { text: 'Alejandro De Castro' },
      { text: 'Linux Torbald' },
      { text: 'Bill Gates' }
    ],
    miarray2: [
      { text: 'Lunes' },
      { text: 'Martes' },
      { text: 'Miercoles' }
    ]
  }
})
```


### $data 
Es una variable especial de Vue.js y con ella podemos examinar nuestra propiedad data de nuestro objeto VM.

#  Directivas

### v-bind
> Con esta directiva podremos vincular un atributo html a un valor que tenemos en nuestro modelo. Recibe como parámetro el atributo. De esta manera podríamos, por ejemplo, asignar el atributo disabled condicionalmente a un botón., ejemplo:
```javascript
<button v-bind:disabled="my_variable">Enviar</button>
```

### v-bind:class
Es una clase dinámica...


> De no usarse esta directiva, se asignaría el valor de cadena de texto que haya en la variable que estamos pasando como parámetro.
> NOTA: es posible abreviar completamente la directiva v-bind dejando unicamente los dos puntos :

### v-once
> Esta directiva no necesita ningún argumento, sirve para hacecr estatico el valor en donde se declare.
> Este valor no cambiará asi se asigne otro valor a la varible.

### v-text
> Esta directiva recibe una variable o texto que se imprimira en donde la estemos usando.  Para que imprima una variable se le pasa entre comillas dobles el nombre de la "variable" Esta variable será una propiedad del objeto vm. En caso de que se quiera pasar directamente el texto se puede hacer usando comillas simples dentro de las comillas dobles "'texto dentro de comillas simples'".
### v-html

> Para proteccion vue deshabilitará cualquier etiqueta html que se pase dentro de una variable.  En ciertos casos puede que sea necesasrio evitar este comportamiento.  Utilizando v-html se evita este comportamienmto y las etiquetas html se comportaran como tal en lugar de comportarse como texto comun.

### v-if
```javascript
v-if="vue.exp"
```
> Con la directiva v-if puedo evaluar si el miembro del objeto en este caso vue.exp es verdadero (tiene datos)  en caso de que si lo tenga procederá con la sentencia. No así si es null, igual a un if comun en php.

### v-else-if
> Para usar luego del primer v-if
### v-else
> Para usar en la última opción del if.

> NOTA: la directiva v-if no oculta el código sino que directamente lo elimina del DOM,  en caso de querer solamente ocultarlo y mostrarlo se deberá usar la directiva v-show que veremos a continuación


### v-show
Esta directiva no elimina los elementos, sino que los muestra u oculta utilizando un display:none o display:block.   
Tener en cuenta que esta directiva no es compatible con la etiqueta <template>.  
NOTA: según la documentación, v-show será mas rápido para mostrar u ocultar elementos que v-if y v-else.   


### v-on
> Con esta directiva podremos escuchar un evento, ya sea nativo, o creado por nosotros. Por ejemplo podríamos estar atentos a que se haga click en un botón para lanzar una acción en nuestro modelo.
```javascript
<button v-on:click="mi_funcion">Enviar</button>
```
> La directiva v-on puede ser resumida poniendo simplemente la arroba @   quedando la linea de arriba asi:

```javascript
<button @click="mi_funcion">Enviar</button>
```



### template

> En Vue es posible incluír los asi llamados 'template' que no es otra cosa que código HTML que usaremos como plantilla. si el código es pequeño se escribe en la misma linea:

```javascript
template:'<span v-bind:class="cssClasses" aria-hidden="true"></span>'
```
> 
> En ocaciones el template es demasiado grande para ponerlo en linea, por lo que una posibilidad será incluir todo el código que se quiera usar como template en unas etiquetas script del tipo x-template, luego solo resta ponerle un ID e invocarlo. 
```javascript
<script type="text/x-template" id="task-template">

  // acá iría todo el template

</script>
```
Invocando al template:
```javascript
template: '#task-template'
```



### $emit
> El método $emit puede usarse como evento personalizado, para emitir un evento cuando algo suceda en la función en donde se lo declare, de esta manera una alerta será disparada para los componentes que esten escuchando este evento, ahora veremos como se escucha un evento emitido por este metodo $emit.
> 
> Para poder usar este metodo, primero debo instanciar un objeto de Vue, aquí un ejemplo completo.
> 
> 
> Este metodo recibe primero el nombre, y luego el argumento
> 
```javascript
var EventBus = new Vue;

EventBus.$emit('nombre_evento_emisor',this.index);
```
> 
> Luego para escuchar el evento debo por así decirlo 'suscribirme' a ese evento, de esta manera:
> 
```javascript
EventBus.$on('nombre_evento_emisor', function (index){
  // lo que quiero ejecutar al escuchar el evento
                                                     }
```

__________________________________________________________________________________________________

#### Uso de Vue-cli
> 
> Prerequisitos: tener Node instalado, y NPM. 
> 
Instalando el cliente:

```javascript
npm install vue-cli -g
```

Crear un proyecto con una plantilla en blanco:
```javascript
vue init simple nombre-del-proyecto
```
> Crear un proyecto con una plantilla webpack-simple. Esta plantilla utilizará webpack y una serie de modulos de webpack como vue-loader, el cuál nos va a permitir utilizar componentes de Vue en un solo archivo (Single File Components):
```javascript
vue init webpack-simple nombre_proyecto
```

> Al ejecutar este comando nuevamente Vue.js nos realizará una serie de preguntas, el nombre del proyecto, la descripción del proyecto, el autor y si queremos utilizar Sass.
> Una vez hecho esto  se generá la carpeta de nuestro proyecto que esta vez contendrá diferentes archivos:
- La carpeta src es donde pasaremos la mayor parte del tiempo desarrollando nuestra aplicación.
- El archivo de Babel .babelrc. Babel nos permite utilizar las nuevas herramientas de JavaScript y __ES6__ sin incovenientes ya que transpilará nuestro código a una versión de JavaScript que puede ser leida por cualquier navegador.
- El archivo .gitignore nos permite indicarle a git qué archivos queremos ignorar.

> Luego es necesario correr dentro del directorio del proyecto este comando para instalar las dependencias del proyecto
```javascript
npm install
```


Luego puedo compilar el proyecto  con este comando:
```javascript
npm run build
```

Una vez hecho el paso anterior para lanzar y ver la app, ejecuto este comando
```javascript
npm run dev
```

### WEBPACK

Se trata de un empaquetador de módulos, la definición de Webpack es bastante extensa.

### Definiendo Alias


Definiendo alias para las rutas:

```javascript
resolve: {
    alias: {
        'src': path.join(__dirname, 'src'),
        'components': path.join(__dirname, 'src/components'),
    }
},
```

Agregando el directorio src al array de módulos:

```javascript
resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
},
```


```javascript
import EventBus from 'event-bus.js'
 
windows.EventBus = EventBus
```
____________________________________________________________________________________________________
# Creando una OnePage con el plugin VueRouter
```javascript
npm install vue-router
```
Una vez instalado el plugin debe ser importado, como cualquier otro plugin
```javascript
import Router from 'vue-router'
```

También es necesario indicar que se va a usar el plugin de esta manera
```javascript
Vue.use(Router)
```
> 
> Las rutas se especifican en un array y cada ruta será un objeto con al menos las siguientes propiedades:
> 
__path:__ indica a donde apunta la ruta, como por ejemplo /about-us
__component:__ indica el componente asociado a la ruta, representado por un objeto, como por ejemplo AboutUsPage.

```javascript
var router = new Router ({
  routes: [
      {
        path: '/',
        component: Dashboard
      },
      {
        path: '/tasks',
        component: Tasks
      }
  ]
});
```

Luego también es necesario incluír el objeto router dento del objeto VM
```javascript
var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

Por último solo resta agregar esta etiqueta al componente principal:

```javascript
<router-link to="/">Inicio</router-link>
<router-link to="tasks">Tareas</router-link>
```

