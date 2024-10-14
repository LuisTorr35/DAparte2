import React, { createContext, useState } from 'react';

const TaskContext = createContext();

function TaskProvider({ children }) {
    const [tareas, setTareas] = useState([
        { id: 1, texto: 'Comprar leche', completada: false },
        { id: 2, texto: 'Pasear al perro', completada: true },
        { id: 3, texto: 'Pagar facturas', completada: false },
    ]);

    const agregarTarea = (texto) => {
        setTareas([
            ...tareas,
            { id: tareas.length + 1, texto, completada: false },
        ]);
    };

    const marcarTareaCompletada = (id) => {
        setTareas(
            tareas.map((tarea) =>
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
            ),
        );
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    return (
        <TaskContext.Provider
            value={{ tareas, agregarTarea, marcarTareaCompletada, eliminarTarea }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };
