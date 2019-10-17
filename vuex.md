# Vuex
![vueJS](https://raw.githubusercontent.com/aledc7/vuejs/master/vuelogo.png)
[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)


__Vuex__ es una librería oficial de Vue que permite manejar el estado de la app que estemos creando, de manera centralizada, esto significa que es posible aplicar un patron del tipo __FLEX__ o __REDUX__ .  
Vuex hace posible que toda la informacíon de la App pueda concentrarse en un mismo lugar, y que este lugar actúe como origen único de nuestra data, para que pueda ser accedida y utilizada desde cualquier componente.  
Utilizar __Vuex__ es recomendado cuando tenemos aplicaciones de __mediana o gran escala__ que tengan mucha comunicación entre componentes, por lo tanto si la app es muy pequeña no se recomienda vuex, y en cambio, se puede usar cualquiera de los otros métodos para pasar información, como son __propiedades__, __eventos__, y __slots__.   
En resumen, Vuex sirve para que todos los componentes (sin importar su gerarquía), puedan compartir información de una manera centralizada.  
Al tener un Store de información único (similar al patron Singleton), lo que se logra es que se puedan propagar los cámbios en todos los componentes que están haciendo uso de la Data de ese Store.  
De esta manera, cada vez que la Data en este Sore cámbie, se renderizará en todos los Componentes que usen esta misma Data.  

# Utilizando Vuex


1.  Primeramente es necesario instalar __Vuex__ en nuestro proyecto:
```php
npm install -S vuex
````

2. Una vez instalado, debo crear el archivo __/src/store.js__ que será el componente que contendrá toda la data centralizada de la que hablé arriba.  

Dentro de este archivo estará toda la lógicade vue y vuex para que se pueda utilizar:   

```php
# Archivo /src/store.js

# Primero importo vue y vuex
import Vue from 'vue'
import Vuex from 'vuex'

# Aca le indico a vue que utilice vuex
Vue.use(Vuex)

const store = new Vuex.Store({
# El state en vuex viene a ser como el data en vue, todo lo que se encuentre aca es lo que se va a poder compartir en todos los componentes

state: {
  count: 0
},

# Mutations es el equivalente a Methods en vuex
mutations: {
  increment(state, payload = {}) {
    state.count += payload.number || 1   },
    decrement(state){
      state.count--
    }
  }

})

# Exporto este archivo para poder importarlo en el archivo main.js
export default store
````

3. Luego debo importar este archivo __store.js__ dentro del arcjivo __src/main.js__  e indicarle para que la instancia de vue pueda utilizarlo, insertandole el __store__ 

```php
# Archivo main.js

# Acá lo importo
import store from './store'

# Aca inyecto el store dentro de la instancia de Vue
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
````

4. Luego debo hacer uso de ___mapState__ por lo que debo importarlo en el componente que vaya a utilizar el store

```php
import {mapState, mapMutations} from 'vuex'
````

5. Ahora para poder usar tanto los métodos propios del componente como así también los métodos declarados en el store, necesito una caracteristica llamada __Object Spread Operator__ . Es una incorporación  de __ECMAScript__ bastante nueva, que permite esta funcionalidad, pero requiere de la instalación de un plugin:  __babel/preset-stage-3__  
El Spread Operator se utiliza mediante tres puntos seguidos __...__ antes de un objeto, y en resumen entonces, permite combinar computes properties propias del componente, con computes properties propias del state de vuex.   

```php
# Instalo este plugin para poder usar Object Spread Operator

npm install --save-dev @babel/preset-stage-3
````

5.1 Una vez instalado debo agregar incluir el plugin en el archivo __.babelrc__
```php
# Archivo .babelrc

{
  "presets": [
    ["env", { "modules": false }],
    "stage-3"
  ]
}
````

6. Luego para acceder al store, en el componente que lo vaya a utilizar, dentro de __export default__ debo definir una __computed properties__ en la que invoco a la propiedad en el store que quiera utilizar:


```php
# Componente VUE que vaya a utilizar el store

export default{
  computed:{
  # Acá llamo a count dentro del store
  ...mapState(['count'])
  
  # Metodo del componente
  otroMetodo() {
    console.com("este metodo es propio del componente")
      }
 }
  }
````





