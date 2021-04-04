import React, { useState, createContext } from 'react';

export const CharacterContext = createContext()

export const CharacterProvider = props => {
    const [characters, setCharacters] = useState([
        {
            name: "left",
        },
        {
            name: "right",
        }
    ])

    return (
        <CharacterContext.Provider value={[characters, setCharacters]}>
            {props.children}
        </CharacterContext.Provider>
    )
}