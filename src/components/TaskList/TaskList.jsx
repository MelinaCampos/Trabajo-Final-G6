import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Grid } from "@mui/material";

const TaskList = ({ tareas, onToggleCompletar, onEliminar, onEditar }) => {

  const handleEdit = (tareaId, tareaEditada) => {
    onEditar(tareaId, tareaEditada);
  };

  return (
    <Grid container spacing={{ md: 3 }}>
      <Grid item xs={12}>
        {tareas.map((tarea) => (
          <TaskItem
            tareaId={tarea.id}
            nombre={tarea.nombre}
            completada={tarea.completada}
            onEliminar={() => onEliminar(tarea.id)}
            onToggleCompletar={() => onToggleCompletar(tarea.id)}
            onEditar={handleEdit}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default TaskList;