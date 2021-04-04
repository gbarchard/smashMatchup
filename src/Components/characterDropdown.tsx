import React, { useContext } from 'react'
import SelectSearch, { fuzzySearch } from 'react-select-search'
import { CharacterContext } from '../characterContext'
import { ArticleContext } from '../articleContext'
import characterList from '../characterList';

function getArticleIDByCharacterNames(leftName:string, rightName:string) {
    var leftID = ""
    var rightID = ""
    characterList.forEach(character => {
        if(character.name === leftName) {
            leftID += character.id
        }
        if(character.name === rightName) {
            rightID += character.id
        }
    })
    return (leftID+rightID)
}

interface side {
    side: string
}

const CharacterDropdown = (props:side)  => {
    const [selectedCharacters, setCharacters] = useContext(CharacterContext)
    const [selectedArticle, setArticle] = useContext(ArticleContext)

    const changeCharacter = (e: any) => {
        // setArticle(changeArticle(e))
        let newCharacters = [...selectedCharacters]
        if(props.side === 'left') {
            newCharacters[0].name = e
        }
        else {
            newCharacters[1].name = e
        }
        setCharacters(newCharacters)
    }

    // const changeArticle = (e: any) => {
    //     getArticleIDByCharacterNames(selectedCharacters[0],selectedCharacters[1])
    // }

    return (
        <>
            <SelectSearch onChange={changeCharacter}  options={characterList} search filterOptions={fuzzySearch} placeholder='Character' />
        </>
    )
}
export default CharacterDropdown