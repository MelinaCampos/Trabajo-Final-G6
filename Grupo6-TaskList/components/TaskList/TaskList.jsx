import React from 'react'
import  TaskItem  from '../TaskItem/TaskItem'

const TaskList = ({ tareas, onToggleCompletar, onEliminar }) => {
    return (
      <div>
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