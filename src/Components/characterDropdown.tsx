import React, { useContext } from 'react'
import { ArticleContext } from '../articleContext'
import articles from '../articles'
import SelectSearch, { fuzzySearch } from 'react-select-search'
import characterList from '../characterList';

const CharacterDropdown = (props: any)  => {
    function getArticleIDByCharacterNames(left:string,right:string) {
        var leftID = ""
        var rightID = ""
        characterList.forEach(character => {
            if(character.name === left) {
                leftID += character.id
            }
            if(character.name === right) {
                rightID += character.id
            }
        })
        return (leftID+rightID)
    }

    function getArticleByID(id:string) {
        var val = ""
        articles.forEach(article => {
            if(id === article.id) {
                val =  article
            }
        })
        if (id.length < 6) {
            val = articles[0]
        }
        return val
    }    
    
    const [selectedArticle, setArticle] = useContext(ArticleContext);

    const changeCharacter = (e: any) => {
        let newCharacters = {...selectedArticle}
        if(props.side === 'left') {
            newCharacters.character1 = e
        }
        else {
            newCharacters.character2 = e
        }
        // console.log(getArticleByID(getArticleIDByCharacterNames(newCharacters.character1,newCharacters.character2)))
        newCharacters.article = getArticleByID(getArticleIDByCharacterNames(newCharacters.character1,newCharacters.character2))
            setArticle(newCharacters)

    }

    

    return (
        <>
            <SelectSearch 
                onChange={changeCharacter}
                options={characterList} search
                // renderOption='public/images/stages/battlefield.png'
                filterOptions={fuzzySearch}
                placeholder='Character'
            />
        </>
    )
}
export default CharacterDropdown