import React from 'react';
import './TopNavbar.css';
import {Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='topnavbar'>
      <nav>
      <ul>
        <li>
          <Link to='/' style={{textDecoration: 'none',color:'black'}}>Home</Link>
        </li>
        <li>
          <Link to='/history' style={{textDecoration: 'none',color:'black'}}>History</Link>
        </li>
      </ul>
     </nav>
    </div>
  )
}

export default Navbar