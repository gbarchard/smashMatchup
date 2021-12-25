import React, { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import '../Styles/TextEditor.css'
import Button from 'react-bootstrap/Button'

const TextEditor = ({ content }) => {
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
            // writeToDatabase(contents)
        }
    }
    
    return (
        <>
            <Button onClick={() => {setEdit(!edit)}}>Edit</Button>
            <SunEditor
                hideToolbar={!edit}
                disable={!edit}
                height={"100%"}
                setContents={content}
                setOptions={editorOptions}
                contentEditable={!edit}
            />
        </>
    );
};
export default TextEditor;