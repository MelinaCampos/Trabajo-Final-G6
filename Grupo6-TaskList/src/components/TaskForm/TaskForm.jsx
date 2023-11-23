import React, { useState } from 'react'
import { Button, TextField } from "@mui/material";

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
        setNombreTarea(''); //limpia el input una vez enviado
    };

    return (
        //evento que ejecuta la funcion handlesubmit para que se ejecute cuando se envia la tarea
        <form onSubmit={handleSubmit}>
            <label>
                <TextField
                    size="small"
                    label="Nueva Tarea"
                    value={nombreTarea}
                    onChange={handleChange}
                    sx={{ width: '40%', bgcolor: 'white' }}
                />
            </label>
            <Button size="small" color="primary" variant="contained" type="submit" sx={{ p: 1 }}>Agregar Tarea</Button>
        </form>
    );
};

export default TaskForm;
