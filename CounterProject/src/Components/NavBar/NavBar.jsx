import React from 'react'
import styles from './NavBar.module.css'
import GitHub from '../../assets/Images/github-logo.png'
import RLogo from '../../assets/Images/RLogo.svg'
const NavBar = () => {
  return (
    <div className={styles.headerContainer}>
    <a href="#">
        <img src={RLogo} alt="MyLogo" className={styles.MyLogo}/>
    </a>
    <h2>Counter Project</h2>
    <a href="https://github.com/ramanshu8860">
        <img src={GitHub} alt="GitHub" className="GitHub"/>
    </a>
</div>
  )
}

export default NavBar
