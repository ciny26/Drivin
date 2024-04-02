import { NavLink } from "react-router-dom";
import Logo from "/public/logo.svg"
import "../../styles/nav.modules.css"
import { useState, useEffect } from "react";

const NavBar = () => {
    const [hamMenuOn, setHamMenuOn] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const toggleHamMenu = () => {
        setHamMenuOn(value => !value);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav>
            {hamMenuOn && <div className="overlay"></div>}
            <div className="left-side">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" className="logoImg" />
                    <span>Drivin</span>
                </div>
            </div>
            <div className="burger-icon" onClick={toggleHamMenu}>
                <span className={`line ${hamMenuOn ? "menu-active-first" : ""} `}></span>
                <span className={`line ${hamMenuOn ? "menu-active-second" : ""} `}></span>
                <span className={`line ${hamMenuOn ? "menu-active-last" : ""} `}></span>
            </div>
            {(windowWidth > 636 || hamMenuOn) && (
                <div className="right-side">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
