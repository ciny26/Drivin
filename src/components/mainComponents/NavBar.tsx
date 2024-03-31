import { NavLink } from "react-router-dom";
import Logo from "/public/logo.svg"
import { StyledBtn } from "../elementComps/StyledBtn.styles";
import "../../styles/nav.modules.css"
const NavBar = () => {
    return ( 
        <nav>
            <div className="left-side">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" className="logoImg"/>
                    <span>Drivin</span>
                </div>
            </div>
            <div className="right-side">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            

        </nav>
     );
}
 
export default NavBar;
