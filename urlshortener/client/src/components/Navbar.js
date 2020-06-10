import React from 'react'
import styles from '../styles/navbar.module.css'
import logo from '../images/logo.svg'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
        <div className={styles.navbarlogo}>
            <img src={logo} alt=""/>
        <ul className={styles.links}>
            <li><a href="#">Features</a></li> 
            <li><a href="#">Pricing</a></li> 
            <li><a href="#">Resources</a></li> 
        </ul>
        </div>
        <div>
            <button className={styles.login}>Login</button>
            <button className={styles.signup}>Sign up</button>
        </div>
        </nav>
    )
}

export default Navbar
