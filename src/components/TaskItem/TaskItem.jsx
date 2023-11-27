import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { Grid, TextField } from "@mui/material";

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
        textDecoration: completada ? "line-through" : "none",
        width: "700px",
        height: "57px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
        alignItems: "center",
      }}
      sx={{ p: 1, borderRadius: 4, bgcolor: "#1565c0", m: 1 }}
    >
      {isEditando ? (
        <>
          <Grid item alignItems="center" xs={12} md={9} sx={{ color: "white" }}>
            <TextField
              size="medium"
              label="Editar Tarea"
              value={editadoNombreTarea}
              onChange={handleCambiarInput}
              sx={{ width: "40%", bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              size="medium"
              color="success"
              variant="contained"
              type="submit"
              sx={{ p: 1 }}
              onClick={handleGuardar}
              startIcon={<CheckIcon />}
            >
              Guardar
            </Button>
            <Button
              size="medium"
              color="error"
              variant="contained"
              type="submit"
              sx={{ p: 1 }}
              onClick={handleCancelarEditar}
              startIcon={<DeleteIcon />}
            >
              Cancelar
            </Button>
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
            <span style={{ fontSize: "1.15rem", margin: "auto" }}>
              {nombre.length > 20 ? `${nombre.slice(0, 20)}...` : nombre}
            </span>
          </Grid>
          <Grid item xs={6} md={2}>
            <Button
              size="medium"
              color="error"
              variant="contained"
              type="submit"
              sx={{ p: 1 }}
              onClick={onEliminar}
              startIcon={<DeleteIcon />}
            >
              Eliminar
            </Button>
            <Button
              size="medium"
              color="error"
              variant="contained"
              type="submit"
              sx={{ p: 1 }}
              onClick={handleEditar}
              startIcon={<DeleteIcon />}
            >
              Editar
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default TaskItem;
