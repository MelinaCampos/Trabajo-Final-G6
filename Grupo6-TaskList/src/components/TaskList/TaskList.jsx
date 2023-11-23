import React from 'react'
import  TaskItem  from '../TaskItem/TaskItem'

const TaskList = ({ tareas, onToggleCompletar, onEliminar }) => {
    return (
      <div> //iterando sobre el array tareas para generar el conjunto de elementos TaskItem con el contenido del array
        {tareas.map((tarea) => (
          <TaskItem
            key={tarea.id}
            nombre={tarea.nombre}
            completada={tarea.completada}
            onEliminar={() => onEliminar(tarea.id)}
            onToggleCompletar={() => onToggleCompletar(tarea.id)}
          />
        ))}
      </div>
    );
  };
  
  export default TaskList;
