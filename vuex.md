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

4. Luego, en el componente que vaya a utilizar el store, debo hacer uso de ___mapState__ por lo que debo importarlo 

```php
import {mapState, mapMutations} from 'vuex'
````

5. Ahora para poder usar tanto los métodos propios del componente como así también los métodos declarados en el store, necesito una caracteristica llamada __Object Spread Operator__ . Es una incorporación  de __ECMAScript__ bastante nueva, que permite esta funcionalidad, pero requiere de la instalación de un plugin:  __babel/preset-stage-3__  
El Spread Operator se utiliza mediante tres puntos seguidos __...__ antes de un objeto, y en resumen entonces, permite combinar computes properties propias del componente, con computes properties propias del state de vuex.   

```php
# Instalo este plugin para poder usar Object Spread Operator  "...metodo     ...estado"

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

6. Ahora para poder usar Vuex, existen dos posibilidades, la primera es emitiendo commits, haciendo uso de __this.$store.commit__ , y la segunda es no declarar metodos en el componente vue, y en cambio declararlos en el store.js y usarlos bindeandolos mediante el spread operator veamos el primer caso haciendo uso de __this.$store.commit__   



```php
# Componente VUE que vaya a utilizar el store

export default{
  computed:{
  # Acá mediante el "Spread Operator" bindeo con el elemento count dentro del archivo store.js 
  ...mapState(['count'])
  
  # Metodo propio del componente
  
      
 methods: {
 
      # aca hago commit para bindear, en este caso 'suma' es el nombre de la mutation que vive en en el archivo store.js
      increment(){
        this.$store.commit('suma')
      },
      
      
      # Lo mismo que arriba pero con la mutation resta
      decrement(){       
        this.$store.commit('resta')
      }
    }     
````

7. Ahora veamos la otra posibilidad, que consiste en NO declarar metodos propios dentro del componente, y en vez de esto, declararlos en el store, dentro del objeto __mutations{ }__ y reutilizarlos en el componente vue que yo quiera.   
 Aqui un ejemolo:   


Primero creo los metodos dentro del __store.js__ :
```php

mutations: {
  suma(state, payload = {}) {
      // el payload significa que le puedo pasar un objeto con mas propiedades ademas del state
     state.count += payload.number || 1   },
     
     resta(state, payload = {}){
     state.count-= payload.number || 1
      }
    }

})

  export default store  
````

Los nombres de estos metodos dentro de las mutations sera la manera en que se invoquen desde el componente, this.$store.commit('suma'), en este caso, invoco al metodo 'suma' de la mutation en el store.js.    


Luego en el componente .vue en donde quiera usar estos metodos (mutations) puedo hacerlo mediante spread operator.  
Dentro de __methods:__  quitar los metodos propios del componente, y poner en su lugar el spread operator con las __mapMutations__ con los nombres de los metodos que queremos usar.

```php
methods: {

       // aca uso los metodos (que son mutations)  suma y resta que se encuentran en el archivo store.js
       
      ...mapMutations(['suma','resta']),
      
      
      // estos son metodos comunes, propios del componente vue
      suma10(){
        this.$store.commit('suma',{number:10})
      },
      resta10(){
        this.$store.commit('resta',{number:10})
      }
````



De esta manera entonces es que puedo usar simultaneamente los metodos pripios de un componente, como asi tambien __Métodos__ de un __Store__ de Vuex, en este caso llamado store.js,  que será accesible para cualquier componente de nuestra aplicación.

Cuando algun componente cambie esa data, entonces ese cámbio se reflejará reacticamente en todos los componentes que también se encuentren usando esta data.



### Getters

Los Getters son una caracteristica que permiten acceder a las Propiedades de Vuex de manera personalizada.  Supongamos que tengo la propiedad __count__ de Vuex (que es con la que vengo trabajando), y quiero multiplicarla por 2.  Aqui normalmente podría trabajar esto en el componente que vaya a usar esta propiedad de vuex,  pero esto trae el problema de que al tener varios comoponentes, debería repetir el codigo necesario para multiplicar esta propiedad, en cada componente en donde la vaya a utilizar.  Pero mediante los Getters, puedo realizar esta operación para multiplicar dentro de un getter, y de esta manera, todos los componentes tendrían acceso a este, sin necesidad de repetir el código en cada componente.

Creando un Getter dentro del __store.js__ 

```php
const store = new Vuex.Store({

getters:{
    countDoble(count){
      return state.count * 2
    }
  }
```

Una vez que tengo el getter declarado en el store.js, solo resta llamarlo desde el componente que lo quiera utulizar, dentro de __computed__ de la siguiente manera:

```php
# Archivo .vue en donde quiera usar el getter


computed: {

usandoGetter(){
        return this.$store.getters.countDoble
      }
      
# Luego puedo por ejemplo renderizar el contenido 


<h1> {{ usandoGetter }} </h1>

````






y esto es todo Vuex.


Consejo:  Este tema es algo digamos bastante avanzado....por lo cual mi recomendación es practirar estos pasos y releerlo varias veces, ya que son varios conceptos los que se emplean, y puede que no se entienda a la primera.


Saludos

- [x] Ale Dc








