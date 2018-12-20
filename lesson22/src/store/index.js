let tasks = [
  
    {
      title: "Primer Tarea",
      pending: true,
    },
    {
      title: "Segunda Tarea",
      pending: true,
    },
    {
      title: "Tercer Tarea",
      pending: true,
    }
  
];

tasks.forEach((task, index) => {
  task.description = ' Lorem ipsun';
  task.id = index + 1;
});

export default {
  state: {
    tasks
  },
  findTask(id){
    return this.state.tasks.find(task => task.id == id)
  },
  createTask(task){
    task.id = this.state.tasks.length + 1;
    this.state.tasks.push(task);
  },
  toggleTask(task){
    task.pending = !task.pending;
  },
  updateTask(id, task){
    let index = this.state.tasks.findIndex(task => task.id == id);

    this.state.tasks.splice(index, 1 , task);

  },
  deleteTask(id){
    // aca obtengo el indice que quiero eliminar
    let index = this.state.tasks.findIndex(task => task.id == id);

    // aca borro la tarea con el indice indicado
    this.state.tasks.splice(index,1);
  },
  
};