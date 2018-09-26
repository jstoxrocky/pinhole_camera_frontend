import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Welcome to Joey's Pinhole Photography Homepage!
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
