<template>
<div>
    <task-list :tasks="tasks"> </task-list>
    <button v-on:click="deleteCompleted" class="btn btn-primary">Borrar completadas</button>
    <task-form @created="createTask"></task-form>
</div>

</template>

<script>
import TaskList from './List.vue'
import TaskForm from './CreateForm.vue'

export default {
  components: {
    'task-list': TaskList,
    'task-form': TaskForm,
  },
  methods: {
    createTask(task){
      this.tasks.push(task);
    },
    alertTask(task){
      alert(task.description);
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter(task => task.pending);
    }
  },
  created() {
    this.tasks.forEach((task, index) => this.$set(task, "id", index + 1));
  },
  data() {
    return {
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
  }
}
</script>

