<script>
import store from 'store'
import Form from './Form.vue'

export default {
  render(createElement) {
    return createElement(Form, {
      props: {
        title: 'Nueva tarea',
        action: 'Crear tarea',
        task: {}
      },
      on: {
        save: (draft) =>{
          let nesTask = store.createTask(draft);

          this.$router.push({
            name: 'tasks.details',
            params: {id: newTask.id}
          });
        }
      }
    })
  },
  data() {
    return {
      task:{
        id: '',
        title: '',
        description: '',
        pending: true
      }
    };
  },
  methods: {
    created() {
      store.createTask(this.task);

      this.$router.push({
        name: 'tasks.details',
        params: {id: this.task.id}
      });
    }
  }
};
</script>


