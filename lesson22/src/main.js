// este es el archivo principal en donde pueden ir todasm las funciones GLOBALES
import Vue from 'vue'
import router from 'router'
import App from './components/App.vue'

window.not_found = function(){
  console.log('No se encontró la ruta:' + router.currentRoute.fullPath);
  router.replace('/404');
};


window.not_found_unless = function (condition){
  if (! condition){
    not_found();
  }
}

Vue.component('app-icon', require('./components/Icon.vue').default);



var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
