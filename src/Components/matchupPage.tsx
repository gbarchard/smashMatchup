import React, { useState, useContext } from 'react'
import { CharacterContext } from '../characterContext'

const MatchupPage = ()  => {
    const [characters, setCharacters] = useContext(CharacterContext)
    return (
        <>
            <h1>{characters[0].name} {characters[1].name}</h1>
        </>
    )
}
export default MatchupPage