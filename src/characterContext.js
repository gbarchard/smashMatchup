import React, { useState, createContext } from 'react';

export const CharacterContext = createContext()

export const CharacterProvider = props => {
    const [selectedCharacters, setCharacters] = useState([
        {
            name: "",
        },
        {
            name: "",
        }
    ])

    return (
        <CharacterContext.Provider value={[selectedCharacters, setCharacters]}>
            {props.children}
        </CharacterContext.Provider>
    )
}