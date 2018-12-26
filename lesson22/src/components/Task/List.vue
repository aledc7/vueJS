<template>
<div class="row">
    <div class="col-xs-6 col-md-6">

      <div class="top">
        <h2>Tareas</h2>
        <router-link :to="{name: 'tasks.create'}" >Nueva tarea</router-link>
      </div>



      <ul class="list-group tasks-list">
      <list-item v-for="(task, index) in tasks" :key="task.id" :task="task"></list-item>
    


    </ul>
      <button v-on:click="deleteCompleted" class="btn btn-primary">Borrar completadas</button>
    </div>

    
    <div class="col-xs-6 col-md-6">
      <router-view></router-view>
    </div>


</div>

</template>

<script>
import store from 'store'
import ListItem from "./ListItem.vue";
export default {
  computed: {
    tasks: () => store.state.tasks
  },
  components: {
    "list-item": ListItem
  },
  methods: {
    deleteCompleted() {
      store.deleteCompletedTasks();
      //this.tasks = this.tasks.filter(task => task.pending);
    }
  }
}
</script>

<style lang="scss">

h2 {
  color: red !important;
}

.top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.tasks-list {
  margin-bottom: 40px;
}
</style>


