import React from 'react';
import { Link } from 'react-router-dom'
import imgsun from '../../assets/images/icon/sun.png'

const DarkMode = () => {
    let clickedClass = "clicked"
    const body = document.body
<<<<<<< HEAD
    const lightTheme = "light"
=======
    const lightTheme = "is_dark"
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
    const darkTheme = "is_dark"
    let theme

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }
    if (theme === lightTheme || theme === darkTheme) {
<<<<<<< HEAD
        body.classList.add(theme)
=======
        body.classList.add(darkTheme)
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
    } else {
        body.classList.add(darkTheme)
    }

    const switchTheme = e => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass)
<<<<<<< HEAD
            localStorage.setItem("theme", "light")
            theme = lightTheme
=======
            localStorage.setItem("theme", "is_dark")
            theme = darkTheme
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "is_dark")
            theme = darkTheme
        }
    }
    return (
        <div className="mode_switcher">
<<<<<<< HEAD
        {/* <h6>Dark mode <strong>Available</strong></h6>
        <Link to="#" 
            onClick={e => switchTheme(e)}  >
            <img src={imgsun} alt="" />
        </Link> */}
=======
        <h6>Dark mode <strong>Available</strong></h6>
        <Link to="#" 
            onClick={e => switchTheme(e)}  >
            <img src={imgsun} alt="" />
        </Link>
>>>>>>> fbc57f3d23fc30983d8d562b3367c6eed39dd8e8

    </div>
    );
}

export default DarkMode;
