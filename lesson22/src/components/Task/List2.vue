<template>
  <div>
    <h2 :class="{[$style.subtitle]: hasPendingTasks}">Tareas:</h2>

    <ul class="list-group tasks-list">
      <list-item
        v-for="(task, index) in tasks"
        :tasks="tasks"
        v-bind:key="task.id"
        :task="task"
        :index="index"
        @remove="deleteTask"
      ></list-item>
    </ul>
  </div>
</template>


<script>
import ListItem from "./ListItem.vue";

export default {
  components: {
    "list-item": ListItem
  },
  props: ["tasks"]
 
};
</script>


<style lang="scss">
.tasks-list {
  margin-bottom: 40px;
}
</style>



<style lang="scss" module>
    .subtitle {
    color: red;
    }
</style>


