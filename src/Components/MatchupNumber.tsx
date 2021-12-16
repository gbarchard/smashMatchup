import { React } from 'react';

const MatchupNumber = ({number}) => {
    
    function displayNumber(num: integer) {
        if(num > 0 ) return "+" + num
        if(num === 0) return "±" + num
        return num
    }
    
    return (
        <div>{displayNumber(number)}</div>
    )
}

export default MatchupNumber