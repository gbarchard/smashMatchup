import React, { useState } from 'react'
import StageList from './StageList'
import Stages from '../Data/stages.js'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const allStages = []
for(const stage in Stages) {
    allStages.push(stage)
}

const StageModal = ({ edit }) => {    
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => {setOpen(true)}}>Change</Button>
            <Modal show={open} onHide={() => {setOpen(false)}} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StageList stages={allStages} edit={edit}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default StageModal