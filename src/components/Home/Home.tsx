import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


export default function Home(){
    const navigate = useNavigate()
    return(
        <div className={"flex flex-wrap"}>
            <button
                onClick={() => navigate('/GuessRGB')}>
                    GuessRGB
            </button>
        </div>
    )
}