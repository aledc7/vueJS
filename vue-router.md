# VueJS 2 - Vue Router

[![aledc.com](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/aledc.com.svg)](https://aledc.com)
[![License](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/mit-license.svg)](https://aledc.com)
[![GitHub release](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/release.svg)](https://aledc.com)
[![Dependencies](https://github.com/aledc7/Scrum-Certification/blob/master/recursos/dependencias-none.svg)](https://aledc.com)

Vue Router nos sirve para hacer ruteo del lado del cliente, se puede usar para muchos casos, principalmente para las Single Page Aplications.    

1. Primeramente se debe instalar __Vue Router__ en nuestro proyecto:   
```php
npm install -save vue-router
````

2. Una vez instalado, debo definir un archivo __routes.js__ en donde definiré todas las rutas que quiera declarar para usar con mi aplicacion.   
Dentro de este archivo, primero debo importar el todos los componentes a los que les quiera asignar una ruta, y luego declarar que ruta usará cada componente.   


```php
# Archivo routes.js

# importo todos los componentes que asignaré a las distintas rutas
import LocalComponent from './LocalComponent.vue'
import ChildComponent from './ChildComponent.vue'
import Child2Component from './Child2Component.vue'
import App from './App.vue'
import EventBusComponent from './eventBusComponent.vue'

# Luego declaro un array en donde defino el path que le asignaré a cada componente, luego el componente, y por ultimo el nombre del componente.

const routes = [
  { path:'/', component: App, name: 'home'},
  { path:'/local', component: LocalComponent, name: 'home2'},
  { path:'/child', component: ChildComponent, name: 'child'},
  { path:'/child2', component: Child2Component, name: 'child2'},
  { path:'/event', component: EventBusComponent, name: 'event'}
]

# luego exporto el array creado arriba
export default routes

````





3. Una vez tenga creado el archivo __routes.js__, debemos importarlo y tambien registrarlo para su uso, dentro del archivo __/src/main.js__   

```php
# archivo main.js


# Importo vue router
import VueRouter from 'vue-router'

# Importo el archivo en donde defini las rutas y los componentes asignados a cada una
import routes from './routes'


# Declaro que vue va a usar VueRouter
Vue.use (VueRouter)

# Instancio un nuevo VueRouter y le paso el array de rutas que creé e importé arriba.   
# el modo history es para que en la url no muestre el hashtag #

const router =  new VueRouter({routes, mode:'history'})

# luego en la instancia de Vue, debo pasar esta constante router

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
````

4. Por último solo queda incluir en el componente principal la etiqueta __<router-view></router-view>__  de manera de usar estas rutas

```php
# archivo App.vue

<template> 

    # Incluyo un menú de navegación para recorrer las distintas rutas creadas.
    <router-link to="/">Home</router-link> |
    <router-link to="/local">Local</router-link> |
    <router-link to="/child">Child</router-link> |
    <router-link to="/child2">Child 2</router-link> |
    <router-link to="/event">Event</router-link>

# Estas etiquetas hacen que finalmente se pueda usar Vue Route
<router-view> </router-view>

</template>


</script>

</script>


<style>

</style>
````

De esta manera, cada vez que se necesite una nueva ruta para asignar a un nuevo componente, solo bastará con definirlp en el archivo de __rutas.js__ y crearle el __route-link__ correspondiente.   

Eso es todo

