# VueJS 2 - COMPUTED PROPERTIES Y WATCHER

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)

# COMPUTED PROPERTIES

Una Computed Property es una propiedad que cambia dinamicamente, esta puede llamarse dentro del template pero no puede ser invocada como si se puede hacer con un método.  
Las Computed Properties solo cambian o se reevaluan cuando cambia algo en un componente de la aplicación, por otra parte los métodos se pueden invocar cuando sea quiera, por ejemplo por medio de un boton.

Ejemplo de Computed Properties:  
```php
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
````

El resultado de arriba sería:
````
Mensaje original: Hello

Mensaje de la Computed:  olleH
````


# WATCHERS

Los Watchers permite ejecutar código a partir de que una propiedad de nuestro view model cambie. 
A diferencia de las Computed Properties, los watchers no devuelven un valor, no son propiedades y tampoco pueden ser utilizadas en expresiones.


Ejemplo de un watcher: 
```php
watch:{
   name(newVal, oldVal)  {
     console.log(newVal,oldVal)
   }
 },
````

En el ejemplo de arriba, __name__ sería la propiedad a la que quiero asignar el watcher, de este modo, cada vez que exista algún cámbio en esta propiedad, se desecadenará el watcher.
En este ejemplo, sola se grabará en un console.log el valor nuevo de name, y luego el valor viejo.

Con los watchers entonces, se puede aplicar facilmente el patron observer.

También es posible poner un watcher a una propiedad de un objeto, de manera que el watcher se dispare solamente cuando cambie esa propiedad específica, 
Imaginemos que tengo un objeto llamado __auto__ y este tiene una propiedad llamada __motor__ , una manera de poner un watcher solo a esta propiedad serí
a la siguiente:

```php 
watch: {    
    'auto.motor' () {
      console.log('Se cambió algo de la propiedad 'motor' del objeto auto)
    }
  }
````

De este modo es posible aplicar watcher a cualquier objeto u elemento del DOM.



  
  


