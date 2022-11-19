import React, { useContext} from 'react';
import Form from 'react-bootstrap/Form'
import '../Styles/MatchupNumber.css'
import { ArticleContext } from '../articleContext';

const MatchupNumber = ({number, edit}) => {
    const [article] = useContext(ArticleContext)
    
    const matchupNumbers = [-3,-2,-1,0,1,2,3]

    const matchupMessages = [
        "Large Disadvantage",
        "Disadvantage",
        "Slight Disadvantage",
        "Even",
        "Slight Advantage",
        "Advantage",
        "Large Advantage"
    ]

    function displayNumber(num: integer) {
        if(num > 0 ) return "+" + num
        if(num === 0) return "±" + num
        return num
    }

    function integer(num: string) {
        if (num[0] !== "-") return parseInt(num[1])
        return parseInt(num) 
    }

    function numberToMessage(num: integer) {
        return " " + matchupMessages[matchupNumbers.indexOf(num)]
    }

    const handleChange = (event) => {
        //setDB(event)
        article.matchupNumber = integer(event.target.value)
    }

    if(edit) {
        return (
            <div className="matchup-number-editor">
                <Form.Select
                    defaultValue={displayNumber(number)}
                    onChange={handleChange}
                >
                    {matchupNumbers.map(number =>
                        <option name={number}>{displayNumber(number)}</option>
                    )}
                </Form.Select>
            </div>
        )
    }
    return (
        <div className={"number-"+number+" matchup-number"}>{displayNumber(number)}{numberToMessage(number)}</div>
    )
}

export default MatchupNumber