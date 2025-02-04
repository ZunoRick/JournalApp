import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {
  const { status } = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'ricardo@google.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking',[status])

  const onSubmit = (event) => {
    event.preventDefault()

    dispatch(checkingAuthentication({ email, password }));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={ onSubmit }>
        <Grid2 container sx={{ flexDirection: 'column' }}>
          <Grid2 size={12} sx={{ mt: 2 }}>
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
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                variant="contained"
                fullWidth
                type='submit'
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google/>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction='row' alignSelf='flex-end'>
            <Link component={ RouterLink } color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  )
}
