import { Link as RouterLink } from 'react-router'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks'

const formData = {
  email: 'ricardo@google.com',
  password: '123456',
  displayName: 'Ricardo Zuno'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState);
    
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
            />
          </Grid2>

          <Grid2>
            <TextField
              label='Correo'
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
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
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button
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
