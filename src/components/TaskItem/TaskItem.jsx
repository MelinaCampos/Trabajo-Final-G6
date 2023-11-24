import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { Grid } from "@mui/material";

const TaskItem = ({ nombre, completada, onToggleCompletar, onEliminar }) => {
  return (
    //div que tiene como propiedad tachar la tarea una vez completada
    <Grid
      container
      justifyContent='center'
      style={{
        textDecoration: completada ? "line-through" : "none",
      }}
      sx={{ p:1, borderRadius:4, bgcolor: '#1565c0', m:1 }}
    >
      <Grid container alignItems='center' xs={12} md={9} sx={{color: 'white'}}>
        <span>{nombre}</span>
      </Grid>
      <Grid xs={6} md={1}>
        <ToggleButton // agrega un checkbox que cuando cambie ejecute la funcion que permite que cambie el estado de completada de la tarea
          value=""
          selected={completada}
          onChange={onToggleCompletar}
          sx={{ bgcolor: 'white', p: 1 }}
        >
          <CheckIcon />
        </ToggleButton>
      </Grid>
      <Grid xs={6} md={2}>
        <Button
          size="small"
          color="error"
          variant="contained"
          type="submit"
          sx={{ p: 1 }}
          onClick={onEliminar}
          startIcon={<DeleteIcon />}
        >
          Eliminar
        </Button>
      </Grid>
    </Grid>
    /* ejecuta la funcion que elimina la tarea una vez se clickea el boton */
  );
};

export default TaskItem;
