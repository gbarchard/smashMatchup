import React, { useState, createContext } from 'react';

export const ArticleContext = createContext()

export const ArticleProvider = props => {
    const [selectedArticle, setArticle] = useState('001001')

    return (
        <ArticleContext.Provider value={[selectedArticle, setArticle]}>
            {props.children}
        </ArticleContext.Provider>
    )
}
