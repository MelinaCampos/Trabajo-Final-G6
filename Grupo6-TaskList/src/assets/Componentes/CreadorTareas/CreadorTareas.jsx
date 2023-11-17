import { useState } from 'react'
import { ListaTarea } from './Tareas/ListaTarea.1';


export const CreadorTareas = () => {
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [elementoTarea, setElementoTarea] = useState([
        { nombre: "Mi primer tarea", realizada: false },
        { nombre: "Mi segunda tarea", realizada: false },
        { nombre: "Mi tercera tarea", realizada: false },
        { nombre: "Mi cuarta tarea", realizada: false },
      ]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
     
        if(!elementoTarea.find(tarea => tarea.nombre === nuevaTarea)){
        setElementoTarea([...elementoTarea, { nombre: nuevaTarea, realizada: false }]);
        }
        localStorage.setItem("tareas", nuevaTarea);
        setNuevaTarea("");
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Nueva tarea'
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button>Enviar tarea</button>
        </form>
        <ListaTarea arrayTarea= {elementoTarea}/>
        </>
    )
}


