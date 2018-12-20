<template>
  <div v-if="task">
    <h2 class="subtitle">Editar Tarea:</h2>


    <form @submit.prevent="update">
      <div class="form-group">
        <label for="title">Titulo</label>
        <input type="text" v-model="task.title" class="form-control" id="title">
      </div>

      <div class="form-group">
        <label for="description">Descripcion</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="6"
          v-model="task.description"
          class="form-control"
        ></textarea>
      </div>

      <button class="btn btn-primary">Editar tarea</button>

      <router-link :to="{name: 'tasks'}">Cancelar</router-link>
    </form>
  </div>
</template>

<script>
import store from 'store'

export default {
  props: ['id'],
  data() {
    return {
      task: null
    }
  },
  created() {
    this.findTask();
  },
  watch: {
    'id': 'findTask'
  },
  methods: {
    findTask() {
      this.task = store.findTask(this.id);
      not_found_unless(this.task);
    },
    update() {
      store.updateTask(this.id, this.task);
      this.$router.push({
        name: 'tasks.details',
        params: { id: this.id }
      });
    }
  }
};
</script>

