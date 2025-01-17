import { Link as RouterLink } from 'react-router'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', p: 4 }}
    >
      <Grid2
        size={{ xs: 8, md: 3 }}
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
          p: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>

        <form>
          <Grid2 container sx={{ flexDirection: 'column' }}>
            <Grid2 size={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type="email"
                placeholder="correo@google.com"
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
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Button
                  variant="contained"
                  fullWidth
                >
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container direction='row' justifySelf='flex-end'>
              <Link component={ RouterLink } color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  )
}
