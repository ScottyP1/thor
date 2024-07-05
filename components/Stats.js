'use client'
import { useState, useEffect } from "react";

const weight = 30;
const experience = 18;
const intervalDelay = 100;

export default function Stats() {
    const [tons, setTons] = useState(0);
    const [years, setYears] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTons((prevTons) => {
                if (prevTons < weight) {
                    return prevTons + 1;
                } else {
                    return prevTons;
                }
            });
            setYears((prevYears) => {
                if (prevYears < experience) {
                    return prevYears + 1;
                } else {
                    return prevYears;
                }
            });
        }, intervalDelay);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="stats shadow flex space-x-8">
            <div className="stat flex flex-col items-center">
                <div className="stat-value text-primary text-4xl xl:text-8xl text-red-700">{tons}mln+</div>
                <div className="stat-title text-center">Tons of Cargo Transported</div>
            </div>

            <div className="stat flex flex-col items-center">
                <div className="stat-value text-secondary text-4xl xl:text-8xl text-red-700">{years}+</div>
                <div className="stat-title text-center">Years of experience</div>
            </div>
        </div>
    );
}
