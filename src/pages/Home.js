import myImage from "../me.webp"
import Navbar from "../components/Navbar"
import Tw from "../components/typewriter"
import Links from "../components/links"
import { motion } from "framer-motion"
import { Skeleton } from '@mui/material';
const Home = () => {
    
    return (
        <div>
            <Navbar />
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
            <div style={{display:"flex", justifyContent:"center",margin:"7vh"}}>
                {myImage ? (
                <img className='profilepic' src={myImage} alt="Me" loading="lazy"></img>): <Skeleton className="profilepic"/>}  

            </div>
            <Tw />
            <Links />
            </motion.div>
        </div>
    )
    
}

export default Home