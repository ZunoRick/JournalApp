import { useSelector } from "react-redux"
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector(state => state.auth)

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component='div'>
            { displayName }
          </Typography>
        </Toolbar>

        <Divider/>

        <List>
          {
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            .map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot/>
                  </ListItemIcon>

                  <Grid2 container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary='Lorem ipsum dolor sit amet consectetur adipisicing elit. '/>
                  </Grid2>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
