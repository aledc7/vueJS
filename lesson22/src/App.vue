<template>
<div id="app" class="container">
        <h2>ABM DE TAREAS</h2>

        <ul class="list-group tasks">
            <app-task  v-for="(task, index) in tasks" :tasks="tasks" v-bind:key="task.id"
            :task="task" :index="index" @remove="deleteTask"></app-task>
        </ul>

        

        <form @submit.prevent="createTask" class="new-task-form">
            <input v-model="new_task" type="text" class="form-control" placeholder="escriba una tarea">
            <button class="btn btn-primary">Crear tarea</button>
        </form>
        <br>
        <button v-on:click="deleteCompleted" class="btn btn-primary">Borrar completadas</button>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>

        <footer class="footer">
            <p>&copy; 2019 Ingenea SRL</p>
        </footer>
    </div> 
</template>

<script>
import Task from './Task.vue'

export default {
            components: {
                'app-task': Task
                        },
            data(){ //data: function()
              return {
                errors: [],
                new_task: null,
                tasks: [{
                        description: 'Primer Tarea',
                        pending: true,
                    },
                    {
                        description: 'Segunda Tarea',
                        pending: true,
                    },
                    {
                        description: 'Tercer Tarea',
                        pending: true,
                    }
                ]
            }},
            // aca le pongo in id a cada tarea
            created(){//created: function()
                this.tasks.forEach((task,index) => this.$set(task,'id',index + 1));

                /* este codigo se reemplazo con 'arrow function'
                this.tasks.forEach(function(task,index){
                    this.$set(task,'id',index +1);
                }.bind(this));
                */
            },

            methods: {
                deleteCompleted(){//deleteCompleted: function ()

                    this.tasks = this.tasks.filter(task => task.pending);

                    /* modo viejo
                    this.tasks = this.tasks.filter(function (task) {
                        return task.pending;
                    })

                    */

                },

                createTask(){ // createTask: function ()
                    this.errors = [];
                    if (!this.new_task) {
                        this.errors.push('Debe escribir el nombre de la Tarea');
                    } else {
                        this.tasks.push({
                            description: this.new_task,
                            pending: true,
                            editing: false
                        });
                        this.new_task = '';
                    }
                },

                deleteTask(index){ //deleteTask: function(index)
                    this.tasks.splice(index, 1);
                }



                // ejemplo explicado del método 'splice' de javascript:

                //    defino un array con 6 elementos
                //    var arr = new Array("1", "2", "3", "4", "5", "6");

                //  quiero empezar en el elemento 2, quiero borrar 2 elementos y reemplazarlos con los otros dos elementos; (77 y 78)
                //    arr.splice(2, 2, "77", "78");


                //    document.write(arr);
                // Output: 1,2,77,78,5,6

            } // fin metodos
        }
</script>
