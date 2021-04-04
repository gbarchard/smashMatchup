import React, { useState, useContext } from 'react'
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { CharacterContext } from '../characterContext'

const options = [
    {name: 'Mario', value: 'Mario'},
    {name: 'Donkey Kong', value: 'Donkey Kong'}
]

interface side {
    side: string
}

const CharacterDropdown = (props:side)  => {
    const [characters, setCharacters] = useContext(CharacterContext)
    // if(props.side == 'left') {
    //     setCharacters(characters[0])
    // }
    // onChange={setCharacters} value={props.side == 'left' ? characters[0]:characters[1]}

    const changeCharacter = e => {
        console.log(e)
    }

    return (
        <>
            <SelectSearch onChange={changeCharacter} value={characters} options={options} search filterOptions={fuzzySearch} placeholder='Character' />
            <h1>{characters[0].name}</h1>
        </>
    )
}
export default CharacterDropdown