import React from 'react'
import  "../Navbar/Navbar.css";
import day from '../../assets/day.png';
import night from '../../assets/night.png';

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = ()=> {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className='navbar'>
        <h1>Jean Staicy Auma Otambo</h1>
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Certificates</li>
            <li>Contact</li>
        </ul>

        <img onClick={()=> {toggle_mode()}} src={theme == 'light' ? day : night} alt="toggle-icon" />
        
    </div>


  )
}

export default Navbar