# VueJS 2 - Comunicación entre Componentes

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)


La Comunicación entre componentes en vuejs puede ser de varias maneras:  


Cuando es desde un componente Padre a un Componente hijo, se hace a traves de __propiedades__  

PADRE :arrow_right: __PROPIEDAD__ :arrow_right: HIJO

Cuando es desde un componente hijo hacia un componente padre, se hace a traves de __eventos__ 

HIJO :arrow_right: __EVENTO__ :arrow_right: PADRE




# Padre -> Hijo:

En este caso tenemos como ejemplo un componente padre enviando información a un componente hijo:


1. Primeramente, en el componente __hijo__ se deberá exportar la propiedad que se quiera recibir del padre, eto se hace siempre con en nombre __props:__   


```php

# Componente hijo, que exporta dos propiedades, por las cuales recibe la data del componente padre.
<template>

# aca renderizo dinamicamente las propiedades que recibo desde el componente padre.  
<div>
  <p>{{nombre}}</p>
  <p>{{email}}</p>  
</div>


</template>

<script>
import LocalComponent from './LocalComponent.vue'

export default {
# aca le paso un array con todas las propiedades que quiera recibir del componente padre.
  props: ["nombre_prop", "email_prop" ]
}
</script>


````


2. Luego en el componente Padre, debo primeramente importar el componente hijo, y luego incluirlo en el export default
```php
# Componente Padre

import childComponent from './ChildComponent.vue'

export default{
  components:{
    childComponent
  }    
````
2.1 Luego, primeramente debo incluír la etiqueta del componente hijo en el template, para que aparezca, y luego dentro de la etiqueta del compinente hijo, bindear la propiedad que quiera enviar, con el elemento en el componente padre que tenga los datos que quiero pasarle al componente hijo:
```php
# Componente Padre

<template>

    
    <childComponent :nombre_prop="nombre_data"> </childComponent>


</template>

````

En el ejemplo de arriba, tenemos __nombre_prop__ que es la propiedad que definí en el componente hijo (en el array de __props__,  y a este le asigno __nombre_data__ que es la propiedad en elemento padre, que tiene que existir previamente dentro del objeto data del componente padre.


De esta manera ya se podrían enviar los datos del componente padre al componente hijo.


________________________________________________________________________________________________________________________

# Hijo -> Padre

En este caso tenemos como ejemplo un componente __Hijo__ enviando información a un componente __Padre__:

1. Primero, en el componente hijo, que en este caso será quien envíe la data, se debe definir un método quien será responsable de realizar el envío.  Luego dentro de este método se debe usar la funcion __$emit__ de vue: 
```php
methods:{
    enviaralpadre(){
      this.$emit('emitehijo', this.dato_a_enviar)
    }
  }
````
Analizando el ejemplo de arriba, primeramente se declara __this.$emit__, luego entre parentesis, se pasa primero el nombre del evento, y luego el dato que se quiere enviar. 
El nombre del evento será el mismo que se deba usar luego en el componente padre para reibirlo, y el dato, debe ser el mismo declarado en el objeto data del componente hijo.

2. Luego en el componente Padre, quien recibirá el data, son varios pasos, primeramente se debe bindiar en la etiqueta en donde esté invocado el hijo, en el template, e indicar el nombre del evento emitido con una __@__ seguida del nombre del evento, luego __=__ y el nombre de un método, que debe declararse en el componete padre.

```php

<child @emitehijo="recibePadre"> </child>

````

Tenemos entonces __@emitehijo__  que es el nombre que le puse al evento emisor en el componente hijo... podría haberle puesto cualquier nombre, claro.

Luego tenemos __="recibePadre"__ que será un método que debo crear en el componente padre.
Este método debe obligatoriamente pasársele una parámetro, esta será una variable, que tendrá la data desde el hijo, y se deberá ser asignada a algúna variable en el objeto __data__ del componente Padre. 
  Entonces será necesario en el objeto data del componente padre, crear una variable para que reciba los datos enviados por el hijo.
Veamos un ejemoplo del metodo __recibePadre__

```php
methods: {
recibePadre(data_del_emit){
      this.data_local_en_padre = data_del_emit
    }
         }
````

En el ejemplo de arriba, tenemos el método __recibePadre()__  que redive un parámetro... este parámetro es el que envía en el evento, y trae los datos del componente hijo.
Luego dentro del metodo, a un objeto local que debe existir en la data del padre, se le asigna el parámetro recibido.

De esta manera entonces logramos enviar data de un componente hijo a un componente padre.















