import Vue from 'vue'
import Router from 'vue-router'
import TaskList from 'components/Task/List.vue'
import TaskCreate from 'components/Task/Create.vue'
import Dashboard from 'components/Dashboard.vue'
import TaskDetails from 'components/Task/Details.vue'
import ErrorNotFound from 'components/errors/NotFound.vue'





Vue.use(Router)

const router = new Router ({

// cada ruta de este array recibe el la ruta a la que se hará referencia en la url
// y luego el componente al que debe redirigir cuando se indique esa ruta.


// el modo history de html5 permite eliminar el hashtag # de la url
mode: 'history',

  routes: [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/mis-tareas',
        component: TaskList,
        children: [
          {
            path:'',
            name: 'tasks',
            component:{
              template: '<h2>Por favor selecciona una tarea</h2>'
            }

          },
          {
            path: ':id',
            name: 'tasks.details',
            component: TaskDetails,
            props: true
          },
          {
            path: 'create',
            name: 'tasks.create',
            component: TaskCreate

          }
        ]
      },
      
      {
        path: '/404',
        component: ErrorNotFound
      },
      {
        path: '*',
        redirect: '/404'
      }
  ]
});

export default router