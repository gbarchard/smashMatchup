import React from 'react'
import StageCard from './StageCard'
import Row from 'react-bootstrap/Row'
import '../Styles/StageList.css'

const StageList = (props: any) => {
    if(props.stages.length > 0) {
        return (
            <Row className={props.edit ? "stage-list-modal" : "stage-list"}>
                {props.stages.map(stageName => (
                    <StageCard stage={stageName} key={stageName} edit={props.edit}/>
                ))}
            </Row>
        )
    }
    return (
        <div>No Content</div>
    )
}

export default StageList