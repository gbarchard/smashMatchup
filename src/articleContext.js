import React, { useState, createContext } from 'react';
import articles from './articles'

export const ArticleContext = createContext();    


export const ArticleProvider = props => {
    const [selectedArticle, setArticle] = useState(articles[0])
    
    return (
        <ArticleContext.Provider value={[selectedArticle, setArticle]}>
            {props.children}
        </ArticleContext.Provider>
    )
}

