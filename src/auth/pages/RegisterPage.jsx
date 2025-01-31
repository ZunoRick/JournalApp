import { Link as RouterLink } from 'react-router'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid2 container sx={{ flexDirection: 'column' }}>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type="text"
              placeholder="Tu nombre"
              fullWidth
            />
          </Grid2>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button
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
