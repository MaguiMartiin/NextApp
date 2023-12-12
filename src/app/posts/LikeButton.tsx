'use client'

import {useState} from 'react'
import style from './LikeButton.module.css'

export default function LikeButton ({id}:any) {
    const [liked, setLiked] = useState(false)
    return (
        <button onClick={() => setLiked(!liked)} className={style.button}>
            {liked? '❤' : '♡'}
        </button>
    )
}