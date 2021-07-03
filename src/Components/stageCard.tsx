import React from 'react'
import Stages from '../data/stages.js'
const StageCard = (props: any) => {
    let stagePhoto = "./images/stages/"+Stages[props.stage].image
    let stageName = Stages[props.stage].name
    return (
        <div className = "stage-card-container">
            <div className="stage-card-border">
                <div className="stage-title">{stageName}</div>
                <img className="stage-image" src={stagePhoto} alt={stageName}></img>
            </div>
        </div>
    )
}

export default StageCard