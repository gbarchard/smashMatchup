import SelectSearch, { fuzzySearch } from 'react-select-search';

const options = [
    {name: 'Mario', value: 'Mario'},
    {name: 'Donkey Kong', value: 'Donkey Kong'}
]

function characterDropdown() {
    return (
        <>
            <SelectSearch options={options} search filterOptions={fuzzySearch} placeholder='Character' />
        </>
    )
}
export default characterDropdown