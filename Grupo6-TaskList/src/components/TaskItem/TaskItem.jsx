import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

const TaskItem = ({ nombre, completada, onToggleCompletar, onEliminar }) => {
    return (
      //div que tiene como propiedad tachar la tarea una vez completada
      <div className='boxTarea' style={{ padding: 4 , textDecoration: completada ? 'line-through' : 'none' }}> 
        <ToggleButton // agrega un checkbox que cuando cambie ejecute la funcion que permite que cambie el estado de completada de la tarea
          value=""
          selected={completada}
          onChange={onToggleCompletar}
          sx={{ bgcolor: 'white', p:1 }}
        >
          <CheckIcon />
        </ToggleButton>
        <span style={{ padding: '1rem' }}>{nombre}</span>
        <Button size="small" color="error" variant="contained" type="submit" sx={{ p: 1 }} onClick={onEliminar} startIcon={<DeleteIcon />}>Eliminar</Button>
      </div> //ejecuta la funcion que elimina la tarea una vez se clickea el boton
      
    );
  };
  
  export default TaskItem;
