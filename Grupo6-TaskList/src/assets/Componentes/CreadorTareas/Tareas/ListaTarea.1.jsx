
export const ListaTarea = (props) => {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
          </tr>
        </thead>
        <tbody>
          {props.arrayTarea.map((tarea) => (
            <tr key={tarea.nombre}><td>{tarea.nombre}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



