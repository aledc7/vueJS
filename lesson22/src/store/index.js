let tasks = 
    [
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
      ];

      tasks.tasks.forEach((task, index) => {
          task.id = index + 1;
      });
    
  

export default {
    state: {
        tasks
    }
};
