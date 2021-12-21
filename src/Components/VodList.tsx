import VodCard from './VodCard'
import Row from 'react-bootstrap/Row'

const VodList = ({ vods, characterTop, characterBottom}) => {

    return (
        <Row>
            {vods.map(card => 
                <VodCard
                    youtubeId={card.youtubeId} 
                    topName={card.topName} 
                    bottomName={card.bottomName}
                    tournamentSet={card.tournamentSet}
                    imageTop={characterTop}
                    imageBottom={characterBottom}
                    scoreTop={card.scoreTop}
                    scoreBottom={card.scoreBottom}
                />
            )}
        </Row>
    )
}

export default VodList