import React from 'react'
import StageList from './StageList'
import Stages from '../Data/stages.js'
import Modal from 'react-bootstrap/Modal'

const allStages = []
for(const stage in Stages) {
    allStages.push(stage)
}

const StageModal = ({ open, children, onClose, edit }) => {
    return (
        <Modal show={open} onHide={onClose} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <StageList stages={allStages} edit={edit}/>
            </Modal.Body>
        </Modal>
    )
}

export default StageModal