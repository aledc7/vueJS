<template>
     <li class="list-group-item"
             v-bind:class="{editing: editing, completed: !task.pending}">
                <!-- aca abajo uso v-bind para la clase dinamica, y luego el operador ternario -->
                <a v-on:click="toggleStatus(task)">
                    <app-icon :img="task.pending ? 'unchecked' : 'check'"> </app-icon> 
                        </a>

                <!-- cada tarea sera un objeto, por ende utilizo el alias
                y luego la propiedad del objeto 'description' -->
                <template v-if="!editing">
                    <span class="description">{{ task.description }}</span>
                    <div>
                        <a v-on:click="edit">
                                <app-icon img="edit"></app-icon>
                        </a>
                        <a v-on:click="remove">
                                <app-icon img="trash"></app-icon>                           
                        </a>
                    </div>
                </template>


                <template v-else>
                    <input type="text" v-model="draft">
                    <div>
                        <a v-on:click="update">
                                <app-icon img="ok"></app-icon>                         
                        </a>
                        <a v-on:click="remove">
                                <app-icon img="remove"></app-icon>
                        </a>
                    </div>
                </template>
            </li>
</template>

<script>
import EventBus from './event-bus.js'
import Icon from './Icon.vue'


export default {
            components: {
                'app-icon': Icon
            },

            // data será una función que retornará un false sobre las propiedades de edicion.
            data: function() {
                return {
                    editing: false,
                    draft: '',
                };
            },

            // como template pongo el id de lo que tengo en el html, dentro de las etiquetas script type x-template.
            template: '#task-template',

            // como propiedades paso el array, el alias del array, y el índice.
            props: ['tasks','task', 'index'],

            //Dentro del componente app-task agregamos el método created y desde ahí escuchamos al evento editing:
            created: function () {
                // con $on escucho el evento de nombre editing, luego se ejecitará la funcion que haya adentro.
                EventBus.$on('editing', function (index){

                    // si el indice es distinto del que estoy recibiendo, entonces ejecuto el metodo 'discard' que desactiva el modo edición.
                    if (this.index != index) {this.discard();}

                // con esta linea enlazo la función con el componente.
                }.bind(this));
            },

            methods: {
                //  este método cambia el estado de las tareas de pendiente a realizada (la tacha).
                toggleStatus: function () {
                    this.task.pending = !this.task.pending;
                },
                edit: function () {
                    // con $emit ('nombre_evento', 'donde_actúa') creo un manejador de eventos llamado ediing, y le paso a la funcion el índice como parámetro.
                    // entonces emitirá desde el lugar en donde se le indique.
                    EventBus.$emit('editing',this.index);

                    /*
                    FIX ME: reimplementar
                    this.tasks.forEach(function (task) {
                        task.editing = false;
                    });
                    */

                    this.draft = this.task.description;
                    this.editing = true;
                },
                 
                update: function () {
                    this.task.description = this.draft;

                    this.editing = false;

                },
                discard: function () {
                    this.editing = false;
                },
                remove: function () {
                    // indice es donde empezará a borrar, el mumero siguiente es la cantidad de elementos a borrar.
                    // en este caso se borrará uno solito.
                   this.$emit('remove', this.index);
                },

            }
        }



</script>

