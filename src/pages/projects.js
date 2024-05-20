import Navbar from "../components/Navbar"
import hackomania from "../hackomania.webp"
import hacko2 from "../hacko2.webp"
import uniplanner from "../uniplanner.webp"
import TER from "../TER.webp"
import foodcritic from "../foodcritic.webp"
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard,CCardBody,CCardImage, CCardTitle,CCardText,CCardLink,CCardSubtitle } from '@coreui/react'
import { motion } from "framer-motion"
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoFlask } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiOpenaiFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiKeras } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { SiSqlite } from "react-icons/si";


const Projects = () => {
    
    return (
        <div>
            <Navbar />
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
            <div style={{margin : "3%", marginTop:"5%"}}>
            <div className="masonry-container">
                <div className="masonry-item">
                    <CCard className="ccard"><CCardLink href="https://github.com/thejus03/onepercent" className="text" style={{textDecoration : "none"}}>
                    {hackomania ? (<CCardImage orientation="top" src={hackomania} loading="lazy"/>) : (<CCardImage orientation="top" height="200px" style={{backgroundColor: "#868e96"}} ></CCardImage>)}
                    <CCardBody>
                        <CCardTitle className="text"><h2 className="text1">Hack-O-Mania'24</h2></CCardTitle>
                        <CCardSubtitle><RiNextjsFill size={30}></RiNextjsFill> <RiTailwindCssFill size={30}></RiTailwindCssFill> <BiLogoFlask size={30}></BiLogoFlask> <BiLogoPostgresql size={30}></BiLogoPostgresql> <RiOpenaiFill size={30}></RiOpenaiFill></CCardSubtitle>
                        <CCardText className="text">
                        <i>April 2024</i>
                        <table style={{margin:"1vh"}}>
                            <li>Within 24 hours, with a team of 4, built a Single Source of Truth web page for Government Schemes, Grants and Loans to help SMEs expand and grow their businesses</li>
                            <li>Implemented a services page for businesses to easily apply and check their eligibiliy for schemes or loans.</li>
                            <li>Implemented a network page for business to send posts about the services or products they want to sell to other SMEs in hopes of widening their client base by reducing imperfect information.</li>
                            <li>Implemented a personalised chatbot that prompts LLMs that act as a secondary source for users to rectify their doubts about certain schemes</li>
                            <li>Implemented a Universal Search function that allows users to easily search through all pages in the website</li>
                        </table>
                        <div>
                        <i><u>Click me for Github info</u></i></div>
                        </CCardText>
                    </CCardBody>    
                    {hacko2 ? (<CCardImage orientation="bottom" src={hacko2} loading="lazy"/>) : (<CCardImage orientation="bottom" height="200px" style={{backgroundColor: "#868e96"}} ></CCardImage>)}
                    </CCardLink>
                    </CCard>
                </div>
                <div className="masonry-item" >
                    <CCard className="ccard"><CCardLink href="https://github.com/thejus03/Text-Emotion-Neural" className="text" style={{textDecoration : "none"}}>
                    {TER ? (<CCardImage orientation="top" src={TER} loading="lazy"/>) : (<CCardImage orientation="top" height="200px" style={{backgroundColor: "#868e96"}} ></CCardImage>)}
                    <CCardBody>
                        <CCardTitle className="text"><h2 className="text1">Text Emotion Recognition</h2></CCardTitle>
                        <CCardSubtitle><FaPython size={30} style={{marginRight: "10px"}}></FaPython><SiKeras size={30} style={{marginRight: "10px"}}></SiKeras><SiNumpy size={30} style={{marginRight: "10px"}}></SiNumpy><SiPandas size={30} style={{marginRight: "10px"}}></SiPandas><SiTensorflow size={30} style={{marginRight: "10px"}}></SiTensorflow><SiScikitlearn size={30} style={{marginRight: "10px"}}></SiScikitlearn></CCardSubtitle>
                        <CCardText className="text">
                        <i>Dec 2023</i>
                        <table style={{margin:"1vh"}}>
                            <li>Innovated an advanced neural network model to detect one of six emotions - anger, joy, sadness, fear, love, surprise - in textual data.</li>
                            <li>Enhanced the neural network with Bi-directional Long Short-Term Memory (BiLSTM) hidden layers for greater contextual
                                understanding in sentences, resulting in greater accuracy in emotion detection.</li>
                            <li>Integrated a pre-trained Word2vec model trained on 100 billion words from Google news to convert words to vector representation for
                                more accurate neural network processing.</li>
                            <li>Processed a training dataset of nearly 30000 tweets and sentences.</li>
                            <li>Achieved an impressive accuracy of 88.3% on test data.</li>
                        </table>
                        <div style={{marginTop:"auto"}}>
                        <i><u>Click me for Github info</u></i></div>
                        
                        </CCardText>
                    </CCardBody>
                    </CCardLink>
                    </CCard>
                </div>
                <div className="masonry-item">
                    <CCard className="ccard"><CCardLink href="https://github.com/thejus03/uniplanner" className="text" style={{textDecoration : "none"}}>
                    {uniplanner ? (<CCardImage orientation="top" src={uniplanner} loading="lazy"/>) : (<CCardImage orientation="top" height="200px" style={{backgroundColor: "#868e96"}} ></CCardImage>)}
                    <CCardBody>
                        <CCardTitle className="text"><h2 className="text1">UniPlanner</h2></CCardTitle>
                        <CCardSubtitle><SiDjango size={30} style={{marginRight: "10px"}}></SiDjango><FaPython size={30} style={{marginRight: "10px"}}></FaPython><IoLogoJavascript size={30} style={{marginRight: "10px"}}></IoLogoJavascript><FaCss3Alt size={30} style={{marginRight: "10px"}}></FaCss3Alt><SiSqlite size={30} style={{marginRight: "10px"}}></SiSqlite></CCardSubtitle>
                        <CCardText className="text">
                        <i>Nov 2023</i>
                        <table style={{margin:"1vh"}}>
                            <li>Designed a web application to assist students in their university life.</li>
                            <li>Integrated the use of SQL to add, edit and delete tasks from a local database.</li>
                            <li>Wrote more than 3000 lines of complex JavaScript, HTML and CSS to create a user-friendly and responsive Single Page Application.</li>
                            <li>Wrote more than 300 lines of python to receive and send API requests</li>
                        </table>
                        <div>
                        <i><u>Click me for Github info</u></i></div>
                        </CCardText>
                    </CCardBody>
                    </CCardLink>
                    </CCard>
                </div>
                <div className="masonry-item">
                    <CCard className="ccard"><CCardLink href="https://github.com/thejus03/foodcritic" className="text" style={{textDecoration : "none"}}>
                    {foodcritic ? (<CCardImage orientation="top" src={foodcritic} loading="lazy"/>) : (<CCardImage orientation="top" height="200px" style={{backgroundColor: "#868e96"}} ></CCardImage>)}
                    <CCardBody>
                        <CCardTitle className="text"><h2 className="text1">FoodCritic</h2></CCardTitle>
                        <CCardSubtitle><BiLogoFlask size={30} style={{marginRight: "10px"}}></BiLogoFlask><FaPython size={30} style={{marginRight: "10px"}}></FaPython><IoLogoJavascript size={30} style={{marginRight: "10px"}}></IoLogoJavascript><FaCss3Alt size={30} style={{marginRight: "10px"}}></FaCss3Alt><SiSqlite size={30} style={{marginRight: "10px"}}></SiSqlite><RiOpenaiFill size={30} style={{marginRight: "10px"}}></RiOpenaiFill></CCardSubtitle>
                        <CCardText className="text">
                        <i>Oct 2023</i>
                        <table style={{margin:"1vh"}}>
                            <li>Developed a Flask application that provides an intuitive interface for logging in, adding restaurant reviews, and seeking or searching for restaurant information.</li>
                            <li>Integrated ChatGPT API into search function for recommendations.</li>
                            <li>200+ lines of Python(Backend)</li>
                        </table>
                        <div>

                        <i><u>Click me for Github info</u></i></div>
                        </CCardText>
                    </CCardBody>
                    </CCardLink>
                    </CCard>
                </div>
            </div>
            </div>
            </motion.div>
            
        </div>
    )
}
export default Projects