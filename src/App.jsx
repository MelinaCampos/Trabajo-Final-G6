import './App.css'
import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList/TaskList'
import TaskForm from './components/TaskForm/TaskForm'
import { Grid, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { v4 as uuidv4 } from 'uuid';

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

  const [tareasEliminadas, setTareasEliminadas] = useState(()=>{
    const storedTareasEliminadas = JSON.parse(localStorage.getItem('tareasEliminadas'));
    return storedTareasEliminadas || []
  });

  useEffect(()=>{
    localStorage.setItem('tareasEliminadas', JSON.stringify(tareasEliminadas));
  },[tareasEliminadas])
  
  const agregarTarea = (nombreTarea) => {
    // Validar si ya existe una tarea con el mismo nombre
    const tareaExistente = tareas.find(tarea => tarea.nombre === nombreTarea);

    if (tareaExistente) {
      alert("Ya existe una tarea con el mismo nombre");
      return;
    }

    const nuevaTarea = {
      id: id: uuidv4(),
      nombre: nombreTarea,
      completada: false,
    };
  
  /*const agregarTarea = (nombreTarea) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      nombre: nombreTarea,
      completada: false,
    };*/
  
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
    //setTareas((tareasPrevias) => tareasPrevias.filter((tarea) => tarea.id !== taskId));
  
    const tareaEliminada = tareas.find((tarea => tarea.id === taskId));
    if (tareaEliminada){
      setTareasEliminadas((tareasEliminadasPrevias)=>[...tareasEliminadasPrevias, tareaEliminada]);
      setTareas((tareasPrevias) => tareasPrevias.filter((tarea)=> tarea.id !== taskId))
    }

  };

  const countCompletadas = () => {
    return tareas.filter((tarea) => tarea.completada).length;
  };

  const countPendientes = () => {
    return tareas.length - countCompletadas();
  };
  
  
  const mostrarTareasEliminadas = () => {
    if (tareasEliminadas.length === 0) {
      alert("No hay tareas eliminadas");
      return;
    }

    alert("Tareas eliminadas:\n" + tareasEliminadas.map(tarea => tarea.nombre).join('\n'));
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
        <Typography variant="h6">Tareas Eliminadas</Typography>
        <button onClick={mostrarTareasEliminadas}>Mostrar Tareas Eliminadas</button>
      </Grid>
      <Grid item xs={12}>
        <TaskList
          tareas={tareas}
          onToggleCompletar={handleToggleCompletar}
          onEliminar={handleEliminar}
        />
      </Grid>
        <footer><h6>
          <GitHubIcon/><a href='https://github.com/MelinaCampos' target='_blank'>Meli</a></h6>
          <h6><GitHubIcon/><a href='https://github.com/g0blin1983' target='_blank'>Gabriel</a></h6>
          <h6><GitHubIcon/><a href='https://github.com/LautaroScherer' target='_blank'>Sebastian</a></h6>
        </footer>
    </Grid>
  );
};

export default App;
