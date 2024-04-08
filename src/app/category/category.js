import { getAllFrames, getAllReport } from "@/firebase/functions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Cat = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("cat");

    const renderFrames = async () => {
        const frames = await getAllFrames()
        console.log(frames.filter(item=> category === item.category))
    }
    useEffect(() => { renderFrames() }, [])
    return (
        <div>{category}</div>
    );
};

export default Cat;