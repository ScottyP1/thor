'use client'
import { useState, useEffect } from "react";

const weight = 30;
const experience = 12;

export default function Stats() {
    const [tons, setTons] = useState(0);
    const [years, setYears] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (tons < weight) {
                setTons((prevTons) => prevTons + 1);
            }
            if (years < experience) {
                setYears((prevYears) => prevYears + 1);
            }
        }, 100);

        // Cleanup the timeout
        return () => clearTimeout(timer);
    }, [tons, years]);

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