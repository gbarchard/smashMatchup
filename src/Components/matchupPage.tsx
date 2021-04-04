import React, { useContext } from 'react'
import { CharacterContext } from '../characterContext'

import articles from '../articles'

function getArticleByID(id:string) {
    articles.forEach(article => {
        if(id === article.id) {
            return article.notes
        }
    })
    return articles[0].notes
}


const MatchupPage = (props: any)  => {
    const [selectedCharacters] = useContext(CharacterContext);
    return (
        <div>
            <h1>{selectedCharacters.character1} {selectedCharacters.character2}</h1>
            <h1>{getArticleByID(selectedCharacters.article)}</h1>
        </div>
    )
}
export default MatchupPage