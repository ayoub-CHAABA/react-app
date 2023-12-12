//Placez ce fichier dans src/components/common/.
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import menuItems from '../../menu.json';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
