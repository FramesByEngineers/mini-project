import { getAllFrames ,} from "@/firebase/functions";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Cat = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("cat");
    const [frames, setFrames] = useState([]);

    const renderFrames = async () => {
        try {
            const framesData = await getAllFrames();
            const filteredFrames = framesData.filter(item => category === item.category);
            setFrames(filteredFrames);
        } catch (error) {
            console.error("Error fetching frames:", error);
        }
    }

    useEffect(() => { renderFrames() }, [category]);

    return (
        <div>
            <h1>{category}</h1>
            <div className="frame-container">
                {frames.map((frame, index) => (
                    <img key={index} src={frame.imageUrl} alt={`Frame ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Cat;
