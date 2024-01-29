function uncompletedNotes(nota) {
    const todosNoCompletados = []
    nota.forEach(note => {
        note.todos.filter(element => {
            if (element.done === false) {
                todosNoCompletados.push(`${note.description}: id:${element.id} name:${element.name} done:${element.done}`);
            }
        });
    })
return todosNoCompletados;
}
//nose como poner que salga por consola los objetos sin tener que concatenar.

const notes = [
    {
        id: 1,
        description: "Workout program",
        todos: [
            {
                id: 1,
                name: "Push ups - 10 x 3",
                done: false,
            },
            {
                id: 2,
                name: "Abdominals - 20 x 3",
                done: true,
            },
            {
                id: 3,
                name: "Tapis Roulant - 15min",
                done: true,
            },
        ],
    },
    {
        id: 2,
        description: "Front-end Roadmap",
        todos: [
            {
                id: 1,
                name: "Learn HTML",
                done: true,
            },
            {
                id: 2,
                name: "Learn CSS",
                done: true,
            },
            {
                id: 3,
                name: "Learn JavaScript",
                done: true,
            },
            {
                id: 4,
                name: "Learn Angular",
                done: false,
            },
        ],
    },
];

let listaIncompleta = uncompletedNotes(notes);
console.log(listaIncompleta);