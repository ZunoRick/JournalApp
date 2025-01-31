import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({ title = '', children }) => {
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
        xs={3}
        sx={{
          width: { xs: 1, sm: 450 },
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
          p: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

        { children }
      </Grid2>
    </Grid2>
  )
}
