import React, { useState } from 'react'

const TaskForm = ({ onAgregarTarea }) => {
    const [nombreTarea, setNombreTarea] = useState('');

    const handleChange = (e) => {
        setNombreTarea(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombreTarea.trim() === '') {
            return;
        }

        onAgregarTarea(nombreTarea);
        setNombreTarea('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nueva Tarea:
                <input type="text" value={nombreTarea} onChange={handleChange} />
            </label>
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default TaskForm;
