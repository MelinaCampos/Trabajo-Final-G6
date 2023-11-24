import './App.css'
import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList/TaskList'
import TaskForm from './components/TaskForm/TaskForm'
import { Grid, Typography } from '@mui/material'

const App = () => {

  const [tareas, setTareas] = useState(() => {
    //Inicialización de localStorage o un array vacio.
    const storedTareas = JSON.parse(localStorage.getItem('tareas'));
    return storedTareas || [];
  });

  //Guardar tarea en localStorage cada que actualiza
  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (nombreTarea) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      nombre: nombreTarea,
      completada: false,
    };

    setTareas((tareasPrevias) => [...tareasPrevias, nuevaTarea]);
  };

  const handleToggleCompletar = (tareaId) => {
    setTareas((tareasPrevias) =>
      tareasPrevias.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const handleEliminar = (taskId) => {
    setTareas((tareasPrevias) => tareasPrevias.filter((tarea) => tarea.id !== taskId));
  };

  const countCompletadas = () => {
    return tareas.filter((tarea) => tarea.completada).length;
  };

  const countPendientes = () => {
    return tareas.length - countCompletadas();
  };

  return (
    <Grid container spacing={3} sx={{boxShadow:3}}>
      <Grid item xs={12}>
        <Typography variant='h2'>Lista de Tareas</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <h3>Pendientes: {countPendientes()} </h3>
          </Grid>
          <Grid item xs={6}>
            <h3>Completadas: {countCompletadas()}</h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TaskForm onAgregarTarea={agregarTarea} />
      </Grid>
      <Grid item xs={12}>
        <TaskList
          tareas={tareas}
          onToggleCompletar={handleToggleCompletar}
          onEliminar={handleEliminar}
        />
      </Grid>
    </Grid>
  );
};

export default App;
