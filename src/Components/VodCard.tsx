import React from 'react'
import YouTube from 'react-youtube'
import Card from 'react-bootstrap/Card'
import '../Styles/VodCard.css'

const VodCard = ({ youtubeId, topName, bottomName, tournamentSet, imageTop, imageBottom, scoreTop, scoreBottom }) => {
    
    const CARD_WIDTH = 400

    const videoOpts = {
      height: CARD_WIDTH*9/16,
      width: CARD_WIDTH-2,
    }

    return (
        <Card className="vod-card">
            <div className="youtube">
                <YouTube videoId={youtubeId} opts={videoOpts}/>
            </div>
            <Card.Body>
                <Card.Text>{tournamentSet}</Card.Text>
                <div>
                    <Card.Title className="vod-player-name-row">{topName}</Card.Title>
                    <img 
                        className="vod-player-name-row"
                        width="30px" 
                        src={imageTop}
                        alt=""
                    />
                    <Card.Title className="vod-player-name-row vod-score">{scoreTop}</Card.Title>
                </div>
                <div>
                    <Card.Title className="vod-player-name-row">{bottomName}</Card.Title>
                    <img 
                        className="vod-player-name-row"
                        width="30px" 
                        src={imageBottom}
                        alt=""
                    />
                    <Card.Title className="vod-player-name-row vod-score">{scoreBottom}</Card.Title>
                </div>
            </Card.Body>
        </Card>
    )
}

export default VodCard