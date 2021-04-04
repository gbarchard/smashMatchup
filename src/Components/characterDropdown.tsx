import React, { useContext } from 'react'
import { CharacterContext } from '../characterContext'


import SelectSearch, { fuzzySearch } from 'react-select-search'
import characterList from '../characterList';



const CharacterDropdown = (props: any)  => {
    const [selectedCharacters, setCharacters] = useContext(CharacterContext);

    const changeCharacter = (e: any) => {
        let newCharacters = selectedCharacters
        if(props.side === 'left') {
            newCharacters.character1 = e
        }
        else {
            newCharacters.character2 = e
        }
            setCharacters(newCharacters)
            console.log(selectedCharacters)

    }

    

    return (
        <div>
            <SelectSearch onChange={changeCharacter}  options={characterList} search filterOptions={fuzzySearch} placeholder='Character' />
        </div>
    )
}
export default CharacterDropdown