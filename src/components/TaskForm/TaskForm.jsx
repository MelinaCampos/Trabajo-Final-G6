import React, { useState } from 'react'
import { Button, TextField, Grid } from "@mui/material";

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
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <label>
                    <TextField
                        size="medium"
                        label="Nueva Tarea"
                        value={nombreTarea}
                        onChange={handleChange}
                        sx={{ width: '40%', bgcolor: 'white' }}
                    />
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button size="large" color="primary" variant="contained" type="submit" sx={{ p: 1, width: '40%' }}>Agregar Tarea</Button>
              </Grid>
            </Grid>
        </form>
    );
};

export default TaskForm;
