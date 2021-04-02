import React from 'react'
import TrollFace from './trollface.png'

function Header(){
    return(
        <header>
            <img src={TrollFace} alt="troll face"/>
            <p>Meme Generator</p>

        </header>
    )
}

export default Header