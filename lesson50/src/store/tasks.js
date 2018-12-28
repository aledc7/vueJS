let tasks = [
    {
        title: 'Primer Tarea',
        pending: true,
    },
    {
        title: 'Segunda Tarea',
        pending: true,
    },
    {
        title: 'Tercer Tarea',
        pending: false,
    }
];

tasks.forEach((task, index) => {
	task.description = `
    INGENEA SRL es una empresa dedicada al desarrollo de software y hardware aplicado a la industria,
     la implementación y diseño de tecnologías TIC y la automatización de procesos industriales.
	`;

    task.id = index + 1;
});

export default tasks;