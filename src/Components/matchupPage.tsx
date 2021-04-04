import React, { useContext } from 'react'

import { CharacterContext } from '../characterContext'
import { ArticleContext } from '../articleContext'
import articles from '../articles'
import characterList from '../characterList'

function getArticleByID(id:string) {
    articles.forEach(article => {
        if(id === article.id) {
            return article
        }
    })
    return articles[1]
}


const MatchupPage = ()  => {
    const [selectedCharacters] = useContext(CharacterContext)
    const [selectedArticle] = useContext(ArticleContext)
    return (
        <>
            <h1>{selectedCharacters[0].name} {selectedCharacters[1].name}</h1>
            <h1>{selectedArticle}</h1>
        </>
    )
}
export default MatchupPage