import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch()
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(note)

  const fileInputRef = useRef()

  const dateString = useMemo(() => {
    const newDate = new Date( date )
    return newDate.toUTCString()
  }, [date])

  const onSaveNote = () => {
    dispatch( startSaveNote() )
  }

  const onFileInputChange = (event) => {
    const { target } = event
    if(target.files === 0) return
    dispatch( startUploadingFiles( target.files ) )
  }

  useEffect(() => {
    dispatch( setActiveNote(formState) )
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  return (
    <Grid2
      className='animate__animated animate__fadeIn animate__faster'
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid2>
        <Typography fontSize={39} fontWeight='light'>
          { dateString }
        </Typography>
      </Grid2>

      <Grid2>
        <input
          type="file"
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined/>
        </IconButton>

        <Button
          disabled={ isSaving }
          onClick={ onSaveNote }
          variant="outlined"
          color="primary"
          sx={{ px: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
          Guardar
        </Button>
      </Grid2>

      <TextField
        type="text"
        variant="filled"
        fullWidth
        placeholder="Ingrese un Título"
        label='Título'
        sx={{ border: 'none', mb: 1 }}
        name='title'
        value={title}
        onChange={onInputChange}
      />

      <TextField
        type="text"
        variant="filled"
        fullWidth
        multiline
        placeholder="¿Qué sucedió en el día de hoy?"
        minRows={5}
        name='body'
        value={body}
        onChange={onInputChange}
      />

      {/* Galería de imagenes */}
      <ImageGallery/>
    </Grid2>
  )
}
