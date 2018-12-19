<template>
<div class="row">
    <div class="col-xs-6 col-md-6">
      <task-list :tasks="tasks"> </task-list>
      <button v-on:click="deleteCompleted" class="btn btn-primary">Borrar completadas</button>
    </div>

    
    <div class="col-xs-6 col-md-6">
      <router-view></router-view>
    </div>

    <!-- <task-form @created="createTask"></task-form> -->

</div>

</template>

<script>
import store from 'store'
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
  data() {
    return {
      new_task: '',
      tasks: store.state.tasks
    }
  }
}
</script>

