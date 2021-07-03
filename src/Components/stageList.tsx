import React from 'react'
import StageCard from './stageCard'

const StageList = (props: any) => {
    return (
        <div className = "stage-list">
            {props.stages.map(stageName => (
                <StageCard stage={stageName} key={stageName}/>
            ))}
        </div>
    )
}

export default StageList