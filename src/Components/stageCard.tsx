import React, { useContext, useState } from 'react'
import Stages from '../Data/stages.js'
import Card from 'react-bootstrap/Card'
import { ArticleContext } from '../articleContext';
import '../Styles/StageCard.css'

const StageCard = (props: any) => {
    let stagePhoto = "./images/stages/"+Stages[props.stage].image
    let stageName = Stages[props.stage].name
    
    const [selectedArticle, setArticle] = useContext(ArticleContext);
    let article = {...selectedArticle}

    let [stageSelected, setStageSelected] = useState(
        (props.edit === 'ban' && article.banStages.includes(props.stage)) || 
        (props.edit === 'pick' && article.chooseStages.includes(props.stage))
    )

    function changeStage() {
        switch (props.edit) {
            case "pick":
                if(article.chooseStages.includes(props.stage)) {
                    article.chooseStages.splice(article.chooseStages.indexOf(props.stage),1)
                }
                else {
                    article.chooseStages.push(props.stage)
                }
                setStageSelected(!stageSelected)
                break;
            case "ban":
                if(article.banStages.includes(props.stage)) {
                    article.banStages.splice(article.banStages.indexOf(props.stage),1)
                }
                else {
                    article.banStages.push(props.stage)
                }
                setStageSelected(!stageSelected)
                break;
            default:
                break;
        }
        setArticle(article)
    }
    return (
        <Card
            bg={stageSelected ? 'success' : 'secondary'} 
            className="stage-card"
            onClick={changeStage}
            >
            <Card.Img className="stage-card-image" src={stagePhoto}/>
            <Card.Title>{stageName}</Card.Title>
        </Card>
    )
}

export default StageCard