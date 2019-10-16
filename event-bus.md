# VueJS 2 - Event Bus

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)

Event Bus es una manera de enviar información entre componentes que no tienen relación, esto quere decir que no son ni padres ni hijos.
 Event Bus no es mas que otra instancia de Vue, la cual puede emitir eventos y pasar data a traves de __$emit__ .  
 Luego en el componente en que se quiera recibir esta data se debera hacer uso de __$on__ .   
 De esta forma entonces es posible enviar informacion desde cualquier componente hacia cualquier componente.  
 
 ## Ejemplo completo de Event-Bus
 
 
 1. Primeramete se debe crear un archivo .js en donde se instanciará el etent-bus, para fines de mantener el código organizado, es buena practica crear una carpeta __plugin__ para crear dentro el archivo __event-bus.js__  
 
 
 ## Contenido del archivo creado event-bus.js   
 
 ```php
 
const eventBus = {}

eventBus.install = function (Vue){
Vue.prototype.$bus = new Vue()
}

export default eventBus
````

2. Luego es necesario importar el event bus recien creado en el archivo __main.js__  y declarar para que vue pueda usarlo mediante __vue.use()__  

```php
import EventBus from './plugins/event-bus'
Vue.use(EventBus)
````

3.  Luego, dentro del objeto que quiero que envíe información mediante event bus, debo emitir un evento, indicando la data que quiero enviar en este vento, puede ser una sola variable o todo un objeto, o array de objetos.

## Ejemplo completo de un componente que emite la data de ingresada en un input:   

```php

<template>
<div>
  <h1>Este es un componente que pasa data de un input a traves de Event Bus</h1>

  <div>
    <input v-model="inputchild" placeholder="escriba algo">
    <br>
    <button @click="emitirEventBus">Enviar a todos con EventBus</button>
    <p>______________________________________________________________</p>
  </div>
</div>
</template>

<script>

export default{
  data(){
    return{
      inputchild: ''
    }
  },

  methods: {
    emitirEventBus() {
    # Aca emitoel evento, y le paso el objeto inputchild, que en este caso tendrá el contenido del input de este componente
      this.$bus.$emit('nombre-evento', this.inputchild)
    }
  }
}
</script>
````

4. Ahora solo resta usar __$on__ en el componente en el que quiera recibir y usar la data emitida por el componente emisor.

El evento debe ser escuchado dentro de la función __created()__  y deberá tener el mismo nombre que se le puso en el elemento emisor (nombre-evento), y omo parámetro debe recibir la misma data que emite el componente emisor.  Luego esta data recibida debo asignarla a alguna variable existente en el objeto Data del receptor.

Finalmente la muestro en un parrafo, para comprobar que la estoy recibiendo correcgtamente.

```php
<template>
<!-- Componente que escucha el evento emitido -->
<div>
  <div>
    <h1> Enviado a través de Event-Bus {{ datapropia }}</h1>
  </div>

</div>

</template>

<script>
export default{
  data(){
    return {
      datapropia: ''
    }
  },


  created(){
    this.$bus.$on('nombre-evento',(inputchild)=>{
      this.datapropia = inputchild
    })
  }
}

</script>

````


Esto es todo lo necesario para usar Event-Bus.



 
 
