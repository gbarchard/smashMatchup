import React, { useContext, useState } from 'react'
import { ArticleContext } from '../articleContext'
import StageList from './StageList'
import StageModal from './StageModal'
import ArticleTitle from './ArticleTitle';
import AddVodModal from './AddVodModal'
import VodList from './VodList'
import MatchupNumber from './MatchupNumber';
import MatchupNumberModal from './MatchupNumberModal'
import TextEditor from './TextEditor';
import Button from 'react-bootstrap/Button'

const MatchupPage = (props: any)  => {
    const [selectedArticle] = useContext(ArticleContext);
    const [edit, setEdit] = useState(false)

    if(selectedArticle.id.includes("000")) {
        return (
            <div>Welcome!</div>
        )
    }

    return (
        <>
            <div>
                <Button onClick={() => {setEdit(!edit)}}>Edit</Button>
            </div>
            <ArticleTitle
                nameLeft={selectedArticle.characterPlayingAs}
                nameRight={selectedArticle.characterPlayingAgainst}
                imageLeft={selectedArticle.characterPlayingAsAvatar}
                imageRight={selectedArticle.characterPlayingAgainstAvatar}
            />
            {/* {edit && <MatchupNumberModal/>} */}
            <MatchupNumber number={selectedArticle.matchupNumber} edit={edit}/>
            <h1>{selectedArticle.notes}</h1>
            <TextEditor content={selectedArticle.content} edit={edit}/>
            {/* <h2>Overview</h2>
            <p>This is the summary of how you play the matchup</p>
            <h2>Nuetral</h2>
            <p>Don't approach</p>
            <h2>Advantage</h2>
            <p>This is how you push advantage</p>
            <h3>Ledge Trapping</h3>
            <p>This is how you ledge trap</p>
            <h3>Edge Gaurding</h3>
            <p>This is how you edge guard</p>
            <h2>Disadvangage</h2>
            <p>This is how you get out of disadvantage</p>
            <h3>Recovering</h3>
            <p>This is how you get back to stage</p>
            <h3>Getting Off Ledge</h3>
            <p>This is how you get off of ledge</p> */}
            <h2>Stages</h2>
            <h3>Pick</h3>
            {edit && <StageModal edit={'pick'}/>}
            <StageList stages={selectedArticle.chooseStages}/>
            <h3>Ban</h3>
            {edit && <StageModal edit={'ban'}/>}
            <StageList stages={selectedArticle.banStages}/>
            <h2>Vods</h2>
            {edit && <AddVodModal
                winningCharacter={selectedArticle.characterPlayingAsAvatar}
                losingCharacter={selectedArticle.characterPlayingAgainstAvatar}
            />}
            <VodList
                vods={selectedArticle.vods}
                characterTop={selectedArticle.characterPlayingAsAvatar}
                characterBottom={selectedArticle.characterPlayingAgainstAvatar}
            />
        </>
    )
}
export default MatchupPage