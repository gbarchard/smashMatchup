import React, { useContext } from 'react'
import { CharacterContext } from '../characterContext'
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
                val =  article.notes
            }
        })
        return val
    }    
    
    const [selectedCharacters, setCharacters] = useContext(CharacterContext);

    const changeCharacter = (e: any) => {
        let newCharacters = {...selectedCharacters}
        if(props.side === 'left') {
            newCharacters.character1 = e
        }
        else {
            newCharacters.character2 = e
        }
        console.log(getArticleByID(getArticleIDByCharacterNames(newCharacters.character1,newCharacters.character2)))
        newCharacters.article = getArticleByID(getArticleIDByCharacterNames(newCharacters.character1,newCharacters.character2))
            setCharacters(newCharacters)

    }

    

    return (
        <>
            <SelectSearch onChange={changeCharacter}  options={characterList} search filterOptions={fuzzySearch} placeholder='Character' />
        </>
    )
}
export default CharacterDropdown