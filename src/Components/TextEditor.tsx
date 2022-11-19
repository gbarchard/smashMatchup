import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import '../Styles/TextEditor.css'

const TextEditor = ({ content, edit }) => {    
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
        }
    }
    
    return (
        <SunEditor
            hideToolbar={!edit}
            disable={!edit}
            height={"100%"}
            setContents={content}
            setOptions={editorOptions}
            contentEditable={!edit}
        />
    );
};
export default TextEditor;