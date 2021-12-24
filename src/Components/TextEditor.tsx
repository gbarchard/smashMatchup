import { React, useState, useContext } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import '../Styles/TextEditor.css'
import Button from 'react-bootstrap/Button'
import { ArticleContext } from '../articleContext';

const TextEditor = ({ content }) => {
    const [selectedArticle, setArticle] = useContext(ArticleContext)
    let article = {...selectedArticle}

    const [edit, setEdit] = useState(false)
    const editorOptions = {
        buttonList: [
            ["undo","redo"],
            ["fontSize"],
            ["align"],
            ["bold","italic","underline"],
            ["table","link"],
            ["save"],
        ],
        resizingBar: false,
        callBackSave: (contents) => {
            article.content = contents
            console.log(article)
            setArticle(article)
        }
    }
    
    const handleChange = (event) => {
        article.content = event
        console.log(article.content)
        // console.log(content)
        setArticle(article)
    }

    return (
        <>
            <Button onClick={() => {setEdit(!edit)}}>Edit</Button>
            <SunEditor
                setDefaultStyle="border: none"
                hideToolbar={!edit}
                disable={!edit}
                height={"100%"}
                onChange={handleChange}
                setContents={content}
                setOptions={editorOptions}
                contentEditable={!edit}
            />
        </>
    );
};
export default TextEditor;
