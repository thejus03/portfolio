import { Link } from "react-router-dom";
import { useState } from "react"
import { Turn as Hamburger } from "hamburger-react"
const Navbar = () => {
    // const [click, setClick] = useState(false)
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <div className="Navbar" style={{borderBottom:"3px solid #33332d"}}>
                    <Link to="/">
                        <button className="Navitem">HOME</button>
                    </Link>

                    <Link to="/education">
                        <button className="Navitem">EDUCATION</button>
                    </Link>

                    <Link to="/work">
                        <button className="Navitem">WORK</button>
                    </Link>
        
                    <Link to="/projects">
                        <button className="Navitem">PROJECTS</button>
                    </Link>
            </div>
            <div className="Hamburger-nav">
                <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} duration={0.8} rounded={true} color="#33332d"/>
                <div style={isOpen ? {display:"flex"} : {display:"none"}} className="hamburger-popup">
                    <Link to="/">
                            <button className="Navitem">HOME</button>
                    </Link>

                    <Link to="/education">
                        <button className="Navitem">EDUCATION</button>
                    </Link>

                    <Link to="/work">
                        <button className="Navitem">WORK</button>
                    </Link>

                    <Link to="/projects">
                        <button className="Navitem">PROJECTS</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default Navbar