'use client'
import { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";

export default function CardItem({ img, title, description }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeoutId); // Cleanup the timeout
    }, []);

    return (
        <>
            {loading ? (
                <Skeleton />
            ) : (
                <Card className="mt-6 w-full bg-black mx-auto mb-6">
                    {img && <Image src={img} width={300} height={300} alt={title}
                        className="w-full h-auto md:h-[200px] rounded-t-lg" />}
                    <CardBody>
                        <Typography className="mb-2 text-red-500 text-xl">
                            {title}
                        </Typography>
                        <Typography className="text-white">
                            {description}
                        </Typography>
                    </CardBody>
                </Card>
            )}
        </>
    );
}
