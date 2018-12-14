<template>
  <div id="app" class="container">
    <app-task-list :tasks="tasks"> </app-task-list>

       
    <br>
    <button v-on:click="deleteCompleted" class="btn btn-primary">Borrar completadas</button>
   

<app-task-form @created="createTask"></app-task-form>



   
    <app-footer> </app-footer>
  </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm.vue'
import Footer from './Footer.vue'

export default {
  components: {
    'app-task-list': TaskList,
    'app-task-form': TaskForm,
    'app-footer': Footer

    
  },
  data() {
    //data: function()
    return {
      errors: [],
      new_task: null,
      tasks: [
        {
          description: "Primer Tarea",
          pending: true
        },
        {
          description: "Segunda Tarea",
          pending: true
        },
        {
          description: "Tercer Tarea",
          pending: true
        }
      ],
    };
  },
  // aca le pongo in id a cada tarea
  created() {
    //created: function()
    this.tasks.forEach((task, index) => this.$set(task, "id", index + 1));

 
  },

  methods: {
    createTask(task){
      this.tasks.push(task);
    },
    alertTask(task){
      alert(task.description);
    },
    deleteCompleted() {
      //deleteCompleted: function ()

      this.tasks = this.tasks.filter(task => task.pending);

      /* modo viejo
                    this.tasks = this.tasks.filter(function (task) {
                        return task.pending;
                    })

                    */
    },

    

    // ejemplo explicado del método 'splice' de javascript:

    //    defino un array con 6 elementos
    //    var arr = new Array("1", "2", "3", "4", "5", "6");

    //  quiero empezar en el elemento 2, quiero borrar 2 elementos y reemplazarlos con los otros dos elementos; (77 y 78)
    //    arr.splice(2, 2, "77", "78");

    //    document.write(arr);
    // Output: 1,2,77,78,5,6
  } // fin metodos
};
</script>

<style>
    body {
        margin: 10px;
    }

    .container {
        max-width: 650px;
    }

    .container h2 {
        margin-bottom: 20px;
    }

    
    

    .container footer {
        margin: 40px 0;
        padding-top: 20px;
        border-top: 1px solid #ccc;
        color: #999;
    }
</style>