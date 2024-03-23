import { NavLink } from "react-router-dom";
import Logo from "/public/logo.svg"
import "../../styles/nav.modules.css"
const NavBar = () => {
    return ( 
        <nav>
            <div className="left-side">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" />
                    <span>Drivin</span>
                </div>
            </div>
            <div className="right-side">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/pages">Pages</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            

        </nav>
     );
}
 
export default NavBar;
