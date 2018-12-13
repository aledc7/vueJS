<template>
  <form @submit.prevent="created" class="new-task-form">
    <input v-model="draft" type="text" class="form-control" placeholder="escriba una tarea">
    <button class="btn btn-primary">Crear tarea</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            draft: ''
        }
    },
    methods: {
        created() {
            this.$emit('created',{ 
          description: this.draft,
          pending: true,
          editing: false
        });
        this.draft = '';
      },
    }
}
</script>
