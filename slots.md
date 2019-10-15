# VueJS 2 - SLOTS

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)

Otra manera de pasar información entre componentes Padres hacia Hijos e a traves de los __SLOTS__.
Con esta propiedad de Vue, es posible enviar todo tipo de HTML, modales enteros y cualquier cosa que soporte HTML.   


1. Primero, declaramos el slot dentro del componente Hijo, quien recibirá la información del padre:   
```php

<template>
<!-- Componente llamado 'child2Component' que reibirá los SLOTS del componente Padre -->
<div>

  <slot name="title">  </slot>
  


  <slot name="body">   </slot>
    
 
<!-- Optativamente en el compoonente hijo es posible poner elementos en caso de que el elemento padre no pase ningún elemento -->  
  <slot name="otro_title">
    <!-- Esto es OPTATIVO!!  en caso de que el slot en el padre no exista, se mostrará este -->
    <h1>Titulo Original del Child en un Titulo H1</h1>
  </slot>



</div>

</template>
````

Arriba vemos que para incluír slots en un elemento hijo, simplemente hay que agregar la etiqueta __slot__ con un id.


2. Luego en el componente Padre, quien será el que envíe la información al Hijo, dentro de las etiquetas en donde se está importando al componente hijo, se debe declarar la etiqueta <slot> con la misma id que se le haya pasado en el componente hijo, entonces entre estas dos etiquetas, se podrá pasar todo el html que querramos.
  
Aqui el ejemplo del componente Padre:  
```php
<child2Component>
 <h1 slot="title"> Data pasada a través de un SLOT </h1>
 
  <p slot="body" >
    SLOT Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Assumenda aspernatur consectetur unde, tempore sed nesciunt,
    possimus eius sequi iste temporibus provident omnis neque odio deserunt
    mollitia perspiciatis totam voluptatum est!
  </p>
  
  <slot name="otro_title">
    <h1> Esto es otro título </h1>
  </slot>
  
  
</child2Component>
````
Observamos en el ejemplo de arriba, que las etiquetas __slot__ estan dentro de las etiquetas __child2Component__, que son el componente hijo declarado dentro del padre.

Este componente hijo __child2Component__, deberá estar importado y declarado en el componente padre, tal como se hace siempre en Vue para incluír un componente dentro de otro.   

Eso es todo






