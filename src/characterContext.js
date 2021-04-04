import React, { useState, createContext } from 'react';
// import characterList from './characterList'

export const CharacterContext = createContext();    


export const CharacterProvider = props => {
    const [selectedCharacters, setCharacters] = useState({
        character1: "2",
        character2: "3",
        article: "001001"
        })

    // function getArticleIDByCharacterNames() {
    //     var leftID = ""
    //     var rightID = ""
    //     characterList.forEach(character => {
    //         if(character.name === selectedCharacters[0].name) {
    //             leftID += character.id
    //         }
    //         if(character.name === selectedCharacters[1].name) {
    //             rightID += character.id
    //         }
    //     })
    //     return (leftID+rightID)
    // }
    
    return (
        <CharacterContext.Provider value={[selectedCharacters, setCharacters]}>
            {props.children}
        </CharacterContext.Provider>
    )
}

