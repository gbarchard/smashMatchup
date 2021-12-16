import { React } from 'react';
import '../Styles/ArticleTitle.css'

const ArticleTitle = ({nameLeft, nameRight, imageLeft, imageRight}) => {
    return(
        <>
            <h1 className="article-title-item">{nameLeft}</h1>
            <img className="article-title-item" width="50px"alt="" src={imageLeft}/>
            <h1 className="article-title-item">{nameRight}</h1>
            <img className="article-title-item" width="50px" alt="" src={imageRight}/>
        </>
    )
}

export default ArticleTitle