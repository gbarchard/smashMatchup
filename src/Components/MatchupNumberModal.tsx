import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import '../Styles/MatchupNumberModal.css'

const MatchupNumberModal = () => {
    const [show, setShow] = useState(false)

    const matchupNumbers = ["-3","-2","-1","±0","+1","+2","+3"]

    const handleSubmit = () => {

    }

    return(
        <>
            <Button onClick={() => {setShow(true)}}>Change</Button>
            <Modal show={show} onHide={() => {setShow(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Matchup Number</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ButtonGroup style={{alignContent: "center"}}>
                        {matchupNumbers.map(matchupNumber =>
                            <ToggleButton
                                className="matchup-number"
                                type="radio"
                            >{matchupNumber}
                            </ToggleButton>
                        )}
                    </ButtonGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setShow(false)}}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MatchupNumberModal