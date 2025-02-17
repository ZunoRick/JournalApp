import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router'
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmited, setFormSubmited] = useState(false)

  const { status, errorMessage } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmited(true)

    if (!isFormValid) return

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid2 container sx={{ flexDirection: 'column' }}>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid2>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid2>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid2>

          <Grid2
            size={12}
            sx={{ mt: 2 }}
            display={ !!errorMessage ? '' : 'none'}
          >
            <Alert severity='error'>{ errorMessage }</Alert>
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button
                disabled={ isCheckingAuthentication }
                type='submit'
                variant="contained"
                fullWidth
              >
                Crear Cuenta
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction='row' alignSelf='flex-end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  )
}
