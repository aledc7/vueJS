# VueJS 2 - Comunicación entre Componentes

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)


La Comunicación entre componentes en vuejs puede ser de varias maneras:  


Cuando es desde un componente Padre a un Componente hijo, se hace a traves de __propiedades__  

PADRE -> __PROPIEDAD__ -> HIJO

Cuando es desde un componente hijo hacia un componente padre, se hace a traves de __eventos__ 

HIJO __EVENTO__ -> PADRE


En este caso tenemos como ejemplo un componente padre enviando información a un componente hijo:


1. Primeramente, en el componente __hijo__ se deberá exportar la propiedad que se quiera recibir del padre, eto se hace siempre con en nombre __props:__   


```php

# Este es el componente hijo, que exporta dos propiedades, por las cuales recibe la data del componente padre.
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
import childComponent from './ChildComponent.vue'

export default{
  components:{
    childComponent
  }    
````
2.1 Luego, primeramente debo incluír la etiqueta del componente hijo en el template, para que aparezca, y despues bindear la propiedad que quiera enviar, con el elemento quie tenga los datos que quiero pasarle al componente hijo:
```php
<template>

    
    <childComponent :nombre_prop="nombre_data"> </childComponent>


</template>

````

En el ejemplo de arriba, tenemos __nombre_prop__ que es la propiedad que definí en el componente hijo (en el array de __props__,  y a este le asigno __nombre_data__ que es la propiedad en elemento padre, que tiene que existir previamente dentro del objeto data del componente padre.


De esta manera ya se podrían enviar los datos del componente padre al componente hijo.










