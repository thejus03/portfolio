import Typewriter from "typewriter-effect"

const Tw = () => {
    return (
        <div style={{margin:"2vw"}}>
            <h1 style={{display:"flex", justifyContent:"center"}} className="text">
                <Typewriter 
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 30,
                        strings: ["Hello! I am Thejus.", "Undergrad from NUS Computer Science.","Interested in Quant & SWE roles."]
                    }}
                />
            </h1>
        </div>
    )
}

export default Tw;