import React, { useContext, useState } from 'react';
import { TaskProvider, TaskContext } from './TaskContext';
import './App.css';
function ListaTareas() {
    const { tareas, marcarTareaCompletada, eliminarTarea } =
        useContext(TaskContext);

    return (
        <ul>
            {tareas.map((tarea) => (
                <li key={tarea.id} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                    {tarea.texto}
                    <button onClick={() => marcarTareaCompletada(tarea.id)}>
                        {tarea.completada ? 'Desmarcar' : 'Completar'}
                    </button>
                    <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

function AgregarTarea() {
    const { agregarTarea } = useContext(TaskContext);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaTarea.trim() !== '') {
            agregarTarea(nuevaTarea);
            setNuevaTarea('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Agregar tarea..."
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

function App() {
    return (
        <TaskProvider>
            <div className="container">
                <h1>Lista de Tareas</h1>
                <AgregarTarea />
                <ListaTareas />
            </div>
        </TaskProvider>
    );
}

export default App;
