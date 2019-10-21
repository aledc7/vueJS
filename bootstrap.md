![vueJS](https://raw.githubusercontent.com/aledc7/vuejs/master/vuelogo.png)   

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)

# Incluyendo [Bootstrap-Vue](https://bootstrap-vue.js.org/) a nuestra App

Con más de 40 complementos disponibles y más de 80 componentes de interfaz de usuario personalizados, __BootstrapVue__ proporciona una de las implementaciones más completas del sistema de cuadrícula y componentes Bootstrap v4.3 disponible para Vue.js v2.6 


1. Primero instalar bootstrap en la carpeta de nuestro proyecto, mediante npm.  Existen dos formas, a traves de un plugin, la cual es mas recomendada ya que se configura todo solo,  y a traves de NPM.  Se muestran las dos opciones:  
```php

# OPCIÓN 1: Instalar a traves del plugin  (recomendado)   
vue add bootstrap-vue

# OPCIÓN 2: instalar mediante npm
npm install vue bootstrap-vue bootstrap

# El resultado debería ser similar al signiente:
_______________________________________________________________________________________________
+ vue-cli-plugin-bootstrap-vue@0.4.0
added 1 package from 1 contributor and audited 9980 packages in 4.632s
found 0 vulnerabilities

✔  Successfully installed plugin: vue-cli-plugin-bootstrap-vue

? Use babel/polyfill? Yes
_______________________________________________________________________________________________

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

# Agrego botones tipicos de bootstrap

<div>
  <b-button>Button</b-button>
  <b-button variant="danger">Button</b-button>
  <b-button variant="success">Button</b-button>
  <b-button variant="outline-primary">Button</b-button>
</div>

````

Si todo fue bien, al guardar los cámbios deberia verse el estilo propio de la clase de bootstrap.

- [x] Ale DC



