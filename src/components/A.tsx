import React from 'react'
import s from "./link.module.scss"
import { NavLink, useNavigate } from "react-router-dom";

export default function A({ text, to }: any) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/MusicServer' + to)} className={s.link}>
            {text}
        </div>
    )
}
