import React, { useContext } from 'react'
import { ArticleContext } from '../articleContext'
import articles from '../articles'
import SelectSearch, { fuzzySearch } from 'react-select-search'
import characterList from '../characterList';
import '../Styles/ReactSelectSearch.css'

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
                val = article
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
            newCharacters.characterPlayingAs = e
        }
        else {
            newCharacters.characterPlayingAgainst = e
        }
        setArticle(getArticleByID(getArticleIDByCharacterNames(newCharacters.characterPlayingAs,newCharacters.characterPlayingAgainst)))

    }

    
    const characterPictures = (props, option, snapshot, className) => {
        const imgStyle = {
            borderRadius: '50%',
            verticalAlign: 'middle',
            marginRight: 10,
        };

        return (
            <button {...props} className={className} type="button">
                <span><img alt="" style={imgStyle} width="32" height="32" src={option.avatar} /><span>{option.name}</span></span>
            </button>
        );

    }

    return (
        <SelectSearch 
            onChange={changeCharacter}
            options={characterList}
            search
            renderOption={characterPictures}
            filterOptions={fuzzySearch}
            placeholder='Character'
        />
    )
}
export default CharacterDropdown