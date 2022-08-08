import React, { useContext } from 'react';
import './Navbar.css';
import { MyContext } from './Contexts/Main';

const Navbar = () => {
  const context = useContext(MyContext);
  return (
    <div className="Navbar">
        <h1 className='heading'>ChInstagram</h1>
        <button>Hello {context.signedUser[0]}</button>
    </div>
  )
}

export default Navbar