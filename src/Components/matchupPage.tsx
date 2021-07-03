import React, { useContext } from 'react'
import { ArticleContext } from '../articleContext'
// import StageCard  from './stageCard'
import StageList from './stageList'

const MatchupPage = (props: any)  => {
    const [selectedArticle] = useContext(ArticleContext);
    console.log(selectedArticle)
    return (
        <>
            <h1>{selectedArticle.article.characterPlayingAs}     {selectedArticle.article.characterPlayingAgainst}</h1>
            <h1>{selectedArticle.article.notes}</h1>
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
            <StageList stages={selectedArticle.article.chooseStages}/>
            <h3>Ban</h3>
            <StageList stages={selectedArticle.article.banStages}/>
            <h2>Vods</h2>
        </>
    )
}
export default MatchupPage