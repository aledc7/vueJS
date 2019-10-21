![vueJS](https://raw.githubusercontent.com/aledc7/vuejs/master/vuelogo.png)   

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)

# Incluyendo [Bootstrap-Vue](https://bootstrap-vue.js.org/) a nuestra App

Con más de 40 complementos disponibles y más de 80 componentes de interfaz de usuario personalizados, __BootstrapVue__ proporciona una de las implementaciones más completas del sistema de cuadrícula y componentes Bootstrap v4.3 disponible para Vue.js v2.6 


1. Primero instalar bootstrap en la carpeta de nuestro proyecto, mediante npm:   
```php
npm install vue bootstrap-vue bootstrap
````

2. Luego hacer un import de bootstrap en el archivo js principal, en mi caso estoy usando __main.js__

```php
# archivo main.js


import Vue from 'vue'

# Agregar estos imports
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


# Agregar para que Vue use Bootstrap
Vue.use(VueRouter,BootstrapVue)
````

eso sería todo, ahora puedo usar todas las clases de bootstrap con mi App de Vue.


3. Probando si funciona.

Para probar si Bootstrap está funcionando simplemente agregar cualquiera de las clases de bootstrap a cualquiera de nuestros componentes:   
```php

# Agrego la clase de Bootstrap display-1  a una etiqueta h1
<h1 class="display-1">Projects</h1>
````

Si todo fue bien, al guardar los cámbios deberia verse el estilo propio de la clase de bootstrap.

- [x] Ale DC



