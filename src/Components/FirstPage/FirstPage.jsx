import "./FirstPage.css"
import { useEffect } from "react";
import confetti from "canvas-confetti";
import NextButton from "../NextButton";

export default function FirstPage(){
    useEffect(() => {

        const shoot = () => {
        // Left corner
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 65,
            origin: { x: 0, y: 1 },
            gravity: 0.8,
            ticks: 200,
            scalar: 1.2,
            colors: ["#ff0a54", "#90f1ef", "#b28dff", "#ffdac1", "#f9bec7"],
        });

            // Right corner
        confetti({
            particleCount: 60,
            angle: 120,
            spread: 65,
            origin: { x: 1, y: 1 },
            gravity: 0.8,
            ticks: 200,
            scalar: 1.2,
            colors: ["#ff0a54", "#90f1ef", "#b28dff", "#ffdac1", "#f9bec7"],
        });
        };

        shoot();
        setTimeout(shoot, 800);
    }, []);
    return(
        <>
            <div className="first-bg"> 
                {/* image bg */}

                <h1 className="first-heading">Happy Valentine’s Day, Laado ❤️</h1>


                <p className="first-para">Even though miles sit between us most days, my heart somehow always knows where yours is. Loving you from a distance hasn’t been easy, but it’s been real, and that’s what makes it special. Every message, every late-night call, every moment we count down until we meet again reminds me how lucky I am to have you. When we finally see each other, it feels like the world pauses for a while, like all the waiting suddenly makes sense. I love how we don’t need to be together every day to feel close, how we’ve built something strong with patience, trust, and a lot of feelings. You make ordinary days brighter and long days feel shorter, just by being you. This Valentine’s Day, I just want you to know that no distance can change what I feel, and no amount of time apart can make it fade. I’m grateful for us, for what we have now, and for everything that’s still waiting for us ahead 💕🌍✨</p>
            
                <NextButton nextDesti={"second"}/>


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
                        ❤️
                        </div>
                    ))} 
                </div>
            </div>
        </>
    )
}