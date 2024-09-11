import React from 'react'
import './NavBar.css'
import GitHub from '../assets/Images/github-logo.png'
import RLogo from '../assets/Images/RLogo.svg'
const NavBar = () => {
  return (
    <div className="headerContainer">
    <a href="#">
        <img src={RLogo} alt="MyLogo" class="MyLogo"/>
    </a>
    <h2>Apple Counter Project</h2>
    <a href="https://github.com/ramanshu8860">
        <img src={GitHub} alt="GitHub" class="GitHub"/>
    </a>
</div>
  )
}

export default NavBar
