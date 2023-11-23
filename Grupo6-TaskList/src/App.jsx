import './App.css'
import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList/TaskList'
import TaskForm from './components/TaskForm/TaskForm'


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
    <div>
      <h1>Lista de Tareas</h1>
      <h3>Pendientes: {countPendientes()} </h3>
      <h3>Completadas: {countCompletadas()}</h3>
      <TaskForm onAgregarTarea={agregarTarea} />
      <TaskList
        tareas={tareas}
        onToggleCompletar={handleToggleCompletar}
        onEliminar={handleEliminar}
      />
    </div>
  );
};

export default App;
