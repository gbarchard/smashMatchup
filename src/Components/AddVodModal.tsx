import React, { useState, useContext, useEffect } from 'react';
import { ArticleContext } from '../articleContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YouTube from 'react-youtube';

const AddVodModal = ({ winningCharacter, losingCharacter }) => {
    const [selectedArticle, setArticle] = useContext(ArticleContext);
    let article = {...selectedArticle}
    
    const [show, setShow] = useState(false)
    const close = () => {
        setShow(false)
        setInputs({winningScore: "2", losingScore: "0"})
        setErrors({})
    }
    const [inputs, setInputs] = useState({winningScore: "2", losingScore: "0"})
    
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (Object.keys(errors).length !== 0) {
            checkForErrors()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs])



    const checkForErrors = () => {
        const inputNames = ["youtube","matchTitle","winningPlayer","losingPlayer"]
        var currentErrors = {}
        

        if(inputs.winningScore === inputs.losingScore) {
            currentErrors.winningScore = "Same Score"
            currentErrors.losingScore = "Same Score"
        }

        if(!inputs?.youtube?.includes("youtube.com/") || youtubeLinkToId(inputs?.youtube)?.length !== 11) {
            currentErrors.youtube = "Invalid Link"
        }

        for (const x in inputNames) {
            if(!inputs[inputNames[x]] || inputs[inputNames[x]] === "") currentErrors[inputNames[x]] = "Required"
        }

        setErrors(currentErrors)
        return currentErrors
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        
    }

    
    const handleSubmit = () => {
        
        if(Object.keys(checkForErrors()).length === 0) {
            article.vods.push({
                youtubeId: youtubeLinkToId(inputs.youtube),
                topName: inputs.winningPlayer,
                bottomName: inputs.losingPlayer,
                tournamentSet: inputs.matchTitle,
                scoreTop: inputs.winningScore,
                scoreBottom: inputs.losingScore                
            })
            setArticle(article)
            close()
        }
    }

    const youtubeLinkToId = (link) => {
        var video_id = link?.split('v=')[1];
        var ampersandPosition = video_id ? video_id.indexOf('&') : undefined;
        if(ampersandPosition !== -1 && ampersandPosition !== undefined) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        return video_id
    }

    return (
        <>
            <Button onClick={() => setShow(true)}>Add Vod</Button>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Youtube Video</Form.Label>
                            <Form.Control
                                name="youtube" 
                                placeholder="Youtube Video" 
                                onChange={handleChange}
                                isInvalid={errors.youtube}
                            />
                            <Form.Control.Feedback type="invalid">{errors.youtube}</Form.Control.Feedback>
                        </Form.Group>
                        {youtubeLinkToId(inputs?.youtube)?.length === 11 &&
                            <YouTube 
                                videoId={youtubeLinkToId(inputs.youtube)}
                                opts={{
                                    height: 280,
                                    width: 465
                                }}
                        />}
                        <Form.Group className="mb-3">
                            <Form.Label>Match Title</Form.Label>
                            <Form.Control
                                name="matchTitle" 
                                placeholder="Evo 2019 Grand Finals" 
                                onChange={handleChange}
                                isInvalid={errors.matchTitle}
                            />
                            <Form.Control.Feedback type="invalid">{errors.matchTitle}</Form.Control.Feedback>
                        </Form.Group>
                        <Row>
                            <Col xs={2}>
                                <img width="50px"alt="" src={winningCharacter}/>
                            </Col>
                            <Col>
                                <Form.Label>Winning Player</Form.Label>
                                <Form.Control
                                    name="winningPlayer"
                                    onChange={handleChange}
                                    isInvalid={errors.winningPlayer}
                                />
                                <Form.Control.Feedback type="invalid">{errors.winningPlayer}</Form.Control.Feedback>
                            </Col>
                            <Col xs={3}>
                                <Form.Label>Score</Form.Label>
                                <Form.Select 
                                    name="winningScore" 
                                    onChange={handleChange}
                                    isInvalid={errors.winningScore}
                                >
                                    <option name="2">2</option>
                                    <option name="3">3</option>
                                </Form.Select>                                
                                <Form.Control.Feedback type="invalid">{errors.winningScore}</Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <img width="50px"alt="" src={losingCharacter}/>
                            </Col>
                            <Col>
                                <Form.Label>Losing Player</Form.Label>
                                <Form.Control 
                                    name="losingPlayer" 
                                    onChange={handleChange}
                                    isInvalid={errors.losingPlayer}
                                />
                                <Form.Control.Feedback type="invalid">{errors.losingPlayer}</Form.Control.Feedback>
                            </Col>
                            <Col xs={3}>
                                <Form.Label>Score</Form.Label>
                                <Form.Select 
                                    name="losingScore" 
                                    onChange={handleChange}
                                    isInvalid={errors.losingScore}
                                >
                                    <option name="0">0</option>
                                    <option name="1">1</option>
                                    <option name="2">2</option>
                                </Form.Select>                                
                                <Form.Control.Feedback type="invalid">{errors.losingScore}</Form.Control.Feedback>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddVodModal