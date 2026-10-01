import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion";
import "./FourthPage.css"
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

import vid1 from "../../assets/vid1.mp4";
import vid2 from "../../assets/vid2.mp4";
import vid3 from "../../assets/vid3.mp4";
import vid4 from "../../assets/vid4.mp4";
import vid5 from "../../assets/vid5.mp4";

import song from "../../assets/song.mp3"

export default function FourthPage(){
    const [showStart, setShowStart] = useState(0);
    const audioRef = useRef(null);

    const startMusic = () => {
        if (!audioRef.current) return;

        audioRef.current.currentTime = 15; // start from 15s
        audioRef.current.volume = 0.5;
        audioRef.current.play();
    };

    const items = [
        <span style={{ color: "#ff4d6d" }}>💖</span>,
        <span style={{ color: "#ff85a1" }}>💗</span>,
        "10:39"
        ];

    const mediaItems = [
        { type: "img", src: img1 },
        { type: "video", src: vid1 },
        { type: "img", src: img2 },
        { type: "video", src: vid2 },
        { type: "img", src: img3 },
        { type: "video", src: vid3 },
        { type: "img", src: img4 },
        { type: "video", src: vid4 },
        { type: "img", src: img5 },
        { type: "video", src: vid5 },
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % mediaItems.length);
        }, 6500); // stays for 4 seconds

        return () => clearTimeout(timer);
    }, [index])
    return(
        <div className="fourth-bg">
            <p className="top">10:39</p>
            <h1 className="fourth-heading">Memories Together</h1>
            {showStart === 0? (
                <div>
                    <motion.p 
                    initial={{y:30, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:1, delay:0.4}}
                    className="ready-ask"
                    >Are you ready to see something special?
                    </motion.p>

                    <motion.button
                    initial={{y:15, scale:0.7, opacity:0}}
                    animate={{y:0, scale:1, opacity:1}}
                    transition={{duration:1, delay:1.9}}
                    className="start-button"
                    onClick={() => {
                        setShowStart(1);
                        startMusic();
                    }}
                    >Start</motion.button>
                </div>
            ):(
                <div className="mem-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={index}
                        className="media-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8 }}
                        >
                        {mediaItems[index].type === "img" ? (
                            <img src={mediaItems[index].src} alt="" />
                        ) : (
                            <video
                            src={mediaItems[index].src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            />
                        )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
            {showStart===1 && (
                <div>
                {[...Array(20)].map((_, i) => (
                    <div
                    key={i}
                    className="floating-item"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        fontSize: `${Math.random() * 1.2 + 1.5}rem`,
                    }}
                    >
                    {items[Math.floor(Math.random() * items.length)]}
                    </div>
                ))} 
                </div>
            )}

            <audio ref={audioRef} src={song} loop />

        </div>
    )
}