import { Button } from '@mui/material';
import React from 'react';

function Sidebar() {

  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Button variant = 'contained' color = "primary">
        My Button
      </Button>
    </div>
  );
}

export default Sidebar;
