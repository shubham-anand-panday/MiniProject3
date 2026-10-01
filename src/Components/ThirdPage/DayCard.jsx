import { motion, useAnimationControls } from "framer-motion"
import heart from "../../assets/heart.png"
import tempImg from "../../assets/dev1.png"
import { useState } from "react"


export default function DayCard({ date, wish, leftImg, rightImg, index }) {
  const [opened, setOpened] = useState(false)

  return (
    <motion.div 
    className="day-container"
    initial={{
      translateY: 50,
      opacity: 0,
    }}
    animate={{
      translateY: 0,
      opacity: 1
    }}
    transition={{ duration: 0.6, ease: "easeInOut", delay:index+0.15 }}

    >
      <h3 className="day-heading">{date}:</h3>

      <div className="img-container">
        <motion.img
          src={leftImg}
          className="side-img"
          animate={{
            rotateY: opened ? 45 : 0,
            translateX: opened ? -20 : 0,
            filter: opened ? "brightness(0.4)" : "brightness(1)",
            boxShadow: opened
              ? "inset -30px 0 40px rgba(0,0,0,0.35)"
              : "none"
              
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <motion.p
          className="day-wish"
          animate={{
            opacity: opened ? 1 : 0,
            y: opened ? 0 : 10,
            scale: opened ? 1 : 0.6
          }}
          transition={{ duration: 0.4 }}
        >
          {wish}
        </motion.p>

        <div className="middle-heart-container">
          <motion.img
            src={heart}
            className="middle-heart no-skeleton"
            onClick={() => setOpened(p => !p)}
            animate={{
              opacity: opened ? 0.4 : 1,
              scale: opened ? 0.9 : 1.5
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.img
          src={rightImg}
          className="side-img"
          animate={{
            rotateY: opened ? -45 : 0,
            translateX: opened ? 20 : 0,
            filter: opened ? "brightness(0.4)" : "brightness(1)",
            boxShadow: opened
              ? "inset 30px 0 40px rgba(0,0,0,0.35)"
              : "none"
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="div-line"></div>
    </motion.div>
  )
}