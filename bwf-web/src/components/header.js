import React from 'react';
import logo from '../assets/logo_frame.png'

function Header() {

  return (
    <div className="header">
      <img src = {logo} alt = "BWF LOGO" height= '150'/>
    </div>
  );
}

export default Header;
