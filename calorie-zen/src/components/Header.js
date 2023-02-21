import React from 'react';
import headerLogo from '../images/calorieZen.png';

function Header() {
  return (
    <div>
        <img alt='logo' src={headerLogo} />
        <h1>Calorie-Zen</h1>
    </div>
  );
}
  
export default Header;