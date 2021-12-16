import VodCard from './VodCard'
import Row from 'react-bootstrap/Row'

const VodList = ({ vods, characterTop, characterBottom}) => {
    const list = [
        {
            youtubeId: "SqHRtURYQPo",
            topName: "Mkleo",
            bottomName: "BestNess",
            tournamentSet: "Evo 2019 Grand Finals",
            scoreTop: "3",
            scoreBottom: "2"
        },
        {
            youtubeId: "n85xcNK_cHQ",
            topName: "Untaymed",
            bottomName: "Toast",
            tournamentSet: "The Bird House 29 Grand Finals",
            scoreTop: "3",
            scoreBottom: "2"
        },
        {

        }
    ]

    return (
        <Row>
            {list.map(card => 
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