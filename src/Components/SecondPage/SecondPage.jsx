import "./SecondPage.css"
import {motion} from "framer-motion"
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SecondPage(){
    const [quesIndex, setQuesIndex] = useState(0);
    const [pos, setPos] = useState({});
    const [isEscaping, setIsEscaping] = useState(false);
    const [escapeCount, setEscapeCount] = useState(0);

    const delayTimer = useRef(null);
    const navigate = useNavigate();

    const MAX_ESCAPES = 10

    const ques = [
        "Do you love me? 🥺🥺",
        "Okay okay, you can do it 😂😚",
        "Yayyyy! I knew it 🤭… I LOVE YOU TOO 💙❤️",
        "I know you love me — just click YES 😤😤"
    ];


    const handleYesTap = () => {
        if(escapeCount <= MAX_ESCAPES){
            setIsEscaping(true);
            setEscapeCount((prev) => prev + 1);
            // const newLeft = `${Math.random() * 70 + 5}%`;
            // const newTop = `${Math.random() * 70 + 10}%`;
            const newLeft = `${Math.floor(Math.random() * 80)}%`; 
            const newTop = `${Math.floor(Math.random() * 80)}%`;
            setPos({ left: newLeft, top: newTop });
            if(escapeCount === MAX_ESCAPES){
                setQuesIndex(1);
            }
        }else{
            setQuesIndex(2);
        }
    };

    useEffect(() => {
        if (quesIndex === 2) {
            const timer = setTimeout(() => {
                navigate("/third");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [quesIndex, navigate]);

    const handleNoClick = ()=>{
        setQuesIndex(3);
    }


    return (
        <div className="second-bg">
            <h1 className="ques">
                {ques[quesIndex]}
            </h1>
            {quesIndex===2 ? (
                <motion.div 
                className="reply-gif"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                >
                    <img
                        src="https://media1.tenor.com/m/TUGWcsyvhZsAAAAC/i-love-you-too-heart.gif"
                        alt="fun gif"
                    />
                </motion.div>
            ):
                <motion.div
                className="btn-container"
                initial = {{opacity:0, scale: 0.85}}
                animate = {{opacity:1, scale:1}}
                transition={
                    {
                        duration: 0.6, 
                        delay: 1
                    }}
                >

                    {/* <motion.button
                    onClick={handleYesTap}
                    animate={pos}
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    style={{
                        position: isEscaping ? "absolute" : "static",
                        left: pos.left,
                        top: pos.top,
                    }}
                    >
                    YES
                    </motion.button> */}

                    <div className="yes-slot">
                        <motion.button
                            onClick={handleYesTap}
                            animate={pos}
                            transition={{ type: "spring", stiffness: 400, damping: 40 }}
                            style={{
                            position: isEscaping ? "absolute" : "static",
                            left: pos.left,
                            top: pos.top,
                            }}
                        >
                            YES
                        </motion.button>
                    </div>


                    <button
                    onClick={handleNoClick}
                    >NO</button>
                </motion.div>
            }
        </div>
    )
}