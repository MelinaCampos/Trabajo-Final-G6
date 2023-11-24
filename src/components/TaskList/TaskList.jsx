import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Grid } from "@mui/material";

const TaskList = ({ tareas, onToggleCompletar, onEliminar }) => {
  return (
    //iterando sobre el array tareas para generar el conjunto de elementos TaskItem con el contenido del array
    <Grid container spacing={{md:3}}>
      <Grid item xs={12}>
        {tareas.map((tarea) => (
          <TaskItem
            key={tarea.id}
            nombre={tarea.nombre}
            completada={tarea.completada}
            onEliminar={() => onEliminar(tarea.id)}
            onToggleCompletar={() => onToggleCompletar(tarea.id)}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default TaskList;
