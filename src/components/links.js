import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa";

const Links = () => {
    return (
        <div className="link-container">
            <div style={{backgroundColor: "#33332d", paddingTop:"10px", paddingLeft:"15px", paddingRight: "15px", paddingBottom: "10px",borderTopLeftRadius: "8px", borderTopRightRadius: "8px"}}>
               <Link to="https://www.linkedin.com/in/thejus03">
                <FaLinkedin size={40} color="#f5f5f7" style={{marginRight: "40px"}}></FaLinkedin>
                </Link>
                <Link to="https://github.com/thejus03">
                    <FaGithub size={40} style={{marginRight: "40px"}} color="#f5f5f7"></FaGithub>
                </Link>

                <Link to="mailto:thejusunni@hotmail.com">
                    <HiOutlineMail size={40} style={{marginRight: "40px"}} color="#f5f5f7"></HiOutlineMail>
                </Link> 
                <Link to="https://t.me/thejus03">
                    <FaTelegram size={40} color="#f5f5f7"></FaTelegram>
                </Link>
            </div>
            
            
        </div>
    )
}
export default Links