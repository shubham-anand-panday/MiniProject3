import "./ThirdPage.css"
import { useState } from "react"
import DayCard from "./DayCard"

import rose1 from "../../assets/rose1.jpg"
import rose2 from "../../assets/rose2.jpg"
import propose1 from "../../assets/propose1.jpg"
import propose2 from "../../assets/propose2.jpg"
import choco1 from "../../assets/choco1.jpg"
import choco2 from "../../assets/choco2.jpg"
import teddy1 from "../../assets/teddy1.jpg"
import teddy2 from "../../assets/teddy2.jpg"
import promise1 from "../../assets/promise1.jpg"
import promise2 from "../../assets/promise2.jpg"
import hug1 from "../../assets/hug1.jpg"
import hug2 from "../../assets/hug2.jpg"
import kiss1 from "../../assets/kiss1.jpg"
import kiss2 from "../../assets/kiss2.jpg"
import v1 from "../../assets/v1.jpg"
import v2 from "../../assets/v2.jpg"
import NextButton from "../NextButton"

export default function ThirdPage(){
    const [opened, setOpened] = useState(false)

    const daysData = [
    {
        date: "7 Feb : Rose Day🌹",
        wish: "A rose for the way you quietly colored my days.💞",
        leftImg: rose1,
        rightImg: rose2,
    },
    {
        date: "8 Feb : Propose Day❤️",
        wish: "Some feelings don’t need words, just courage.💞",
        leftImg: propose1,
        rightImg: propose2,
    },
    {
        date: "9 Feb : Chocolate Day🍫",
        wish: "Sweet moments feel sweeter when shared with you.💞",
        leftImg: choco1,
        rightImg: choco2,
    },
    {
        date: "10 Feb : Teddy Day🧸",
        wish: "Comfort has your shape now.💞",
        leftImg: teddy1,
        rightImg: teddy2,
    },
    {
        date: "11 Feb : Promise Day🤞",
        wish: "Some promises are made without speaking them.💞",
        leftImg: promise1,
        rightImg: promise2,
    },
    {
        date: "12 Feb : Hug Day🫂",
        wish: "The world feels lighter when you’re close.💞",
        leftImg: hug1,
        rightImg: hug2,
    },
    {
        date: "13 Feb : Kiss Day😘",
        wish: "Some moments stay, even after they pass.💞",
        leftImg: kiss1,
        rightImg: kiss2,
    },
    {
        date: "14 Feb : Valentine’s Day🥰",
        wish: "And somehow, love felt simple with you.💞",
        leftImg: v1,
        rightImg: v2,
    }
    ]

    return(
        <div className="third-bg">
            <h1 className="third-heading">Our Little Valentine Story</h1>
            <p className="guide">*Tap the heart, one day at a time*</p>

            {daysData.map((day, index) => (
                <DayCard
                key={index}
                index={index}
                date={day.date}
                wish={day.wish}
                leftImg={day.leftImg}
                rightImg={day.rightImg}
                />
            ))}

            <NextButton nextDesti={"fourth"}/>

        </div>
    )
}