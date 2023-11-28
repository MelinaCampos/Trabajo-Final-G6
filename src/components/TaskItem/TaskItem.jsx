import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { Grid, TextField, IconButton } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';

const TaskItem = ({
  tareaId,
  nombre,
  completada,
  onToggleCompletar,
  onEliminar,
  onEditar,
}) => {
  const [isEditando, setIsEditando] = useState(false);
  const [editadoNombreTarea, setEditadoNombreTarea] = useState(nombre);

  const handleEditar = () => {
    setIsEditando(true);
  };

  const handleCancelarEditar = () => {
    setIsEditando(false);
    setEditadoNombreTarea(nombre);
  };

  const handleGuardar = () => {
    onEditar(tareaId, editadoNombreTarea);
    setIsEditando(false);
  };

  const handleCambiarInput = (e) => {
    setEditadoNombreTarea(e.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      style={{
        width: "600px",
        height: "57px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
        alignItems: "center",
      }}
      sx={{ p: 1, borderRadius: 4, bgcolor: '#3E8ADF ', m: 1 }}
    >
      {isEditando ? (
        <>
          <Grid item alignItems="center" xs={12} md={9} >
            <TextField
              size="small"
              value={editadoNombreTarea}
              onChange={handleCambiarInput}
              sx={{ width: "90%", backgroundColor: "white", borderRadius: '5px' }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton aria-label="Guardar" onClick={handleGuardar}>
              <SaveRoundedIcon />
            </IconButton>
            <IconButton aria-label="Cancelar" onClick={handleCancelarEditar}>
              <CancelPresentationRoundedIcon />
            </IconButton>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={6} md={1}>
            <ToggleButton
              value=""
              selected={completada}
              onChange={onToggleCompletar}
              sx={{ bgcolor: "white", p: 1 }}
            >
              <CheckIcon />
            </ToggleButton>
          </Grid>
          <Grid item alignItems="center" xs={12} md={9} sx={{ color: "white" }}>
            <span style={{
              fontSize: "1.25rem",
              margin: "auto",
              textDecoration: completada ? "line-through" : "none",
              color: "black",
              fontWeight: "450"
            }} title={nombre}>
              {nombre.length > 20 ? `${nombre.slice(0, 20)}...` : nombre}
            </span>
          </Grid>
          <Grid item xs={6} md={2}>
            <IconButton aria-label="Editar Tarea" onClick={handleEditar}>
              <EditNoteIcon />
            </IconButton>
            <IconButton aria-label="Eliminar Tarea" onClick={onEliminar}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default TaskItem;
