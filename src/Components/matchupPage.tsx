import React, { useContext } from 'react'
import { CharacterContext } from '../characterContext'
import characterList from '../characterList'

import articles from '../articles'



const MatchupPage = (props: any)  => {
    const [selectedCharacters] = useContext(CharacterContext);
    // var id = getArticleIDByCharacterNames(selectedCharacters.character1,selectedCharacters.character2)
    // console.log('did we get the id'+id)
    return (
        <div>
            <h1>{selectedCharacters.character1} {selectedCharacters.character2}</h1>
            <h1>{selectedCharacters.article}</h1>
        </div>
    )
}
export default MatchupPage