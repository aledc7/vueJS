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
  props: ["tasks"],
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  },
  computed: {
    hasPendingTasks() {
      return this.tasks.some(task => task.pending);
    }
  }
};
</script>


<style lang="scss">
.tasks-list {
  margin-bottom: 40px;
}
</style>

<!--
    Usa “Scopes”
    Agregando el atributo scoped a la etiqueta style podemos definir estilos específicos para un componente,
    es decir estos estilos serán aplicados solo al componente actual:
    <style scoped>
-->


<!--
    Usa CSS Modules
    Otra forma de evitar colisiones entre estilos es usar CSS Modules.
    Para usar CSS Modules añadimos el atributo module a la etiqueta style:
    <style module>
-->



<style lang="scss" module>

   // @import "sass/variables";

    .subtitle {
    color: red;
    }
</style>


