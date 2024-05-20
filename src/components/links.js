import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaTelegram } from "react-icons/fa";

const Links = () => {
    return (
        <div className="link-container">
            <div style={{backgroundColor: "#33332d", paddingTop:"10px", paddingLeft:"20px", paddingRight: "20px", paddingBottom: "10px",borderTopLeftRadius: "20px", borderTopRightRadius: "20px",borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", marginBottom: "10px"}}>
               <a href="https://www.linkedin.com/in/thejus03" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="#f5f5f7" style={{marginRight: "40px"}}></FaLinkedin>
                </a>
                <a href="https://github.com/thejus03" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} style={{marginRight: "40px"}} color="#f5f5f7"></FaGithub>
                </a>

                <a href="mailto:thejusunni@hotmail.com">
                    <TfiEmail size={40} style={{marginRight: "40px"}} color="#f5f5f7"></TfiEmail>
                </a> 
                <a href="https://t.me/thejus03" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={40} color="#f5f5f7"></FaTelegram>
                </a>
            </div>
            
            
        </div>
    )
}
export default Links