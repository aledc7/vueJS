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


export default tasks;
