import React, { useState } from 'react'

const TaskForm = ({ onAgregarTarea }) => { // se pasa la prop desde el app de la funcion para agregar las tareas
    const [nombreTarea, setNombreTarea] = useState('');

    const handleChange = (e) => {
        setNombreTarea(e.target.value); //setea el nombre de la tarea con el input del formulario
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombreTarea.trim() === '') { //evita que se agreguen tareas vacias
            return;
        }

        onAgregarTarea(nombreTarea);
        setNombreTarea(''); //limpia el label una vez enviado
    };

    return (
        //evento que ejecuta la funcion handlesubmit para que se ejecute cuando se envia la tarea
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
