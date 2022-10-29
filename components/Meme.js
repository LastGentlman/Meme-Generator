import React from 'react'

export default function Meme(prop) {
    return (
        <img className="meme--img" src={prop.memeImg} alt="a meme" />
    )
}