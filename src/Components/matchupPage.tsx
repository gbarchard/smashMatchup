import React, { useContext } from 'react'
import { CharacterContext } from '../characterContext'



const MatchupPage = (props: any)  => {
    const [selectedCharacters] = useContext(CharacterContext);
    return (
        <div>
            <h1>{selectedCharacters.character1} {selectedCharacters.character2}</h1>
            <h1>{selectedCharacters.article}</h1>
        </div>
    )
}
export default MatchupPage