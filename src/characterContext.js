import React, { useState, createContext } from 'react';

export const CharacterContext = createContext();    


export const CharacterProvider = props => {
    const [selectedCharacters, setCharacters] = useState({
        character1: "",
        character2: "",
        article: "Select 2 Characters"
        })
    
    return (
        <CharacterContext.Provider value={[selectedCharacters, setCharacters]}>
            {props.children}
        </CharacterContext.Provider>
    )
}

