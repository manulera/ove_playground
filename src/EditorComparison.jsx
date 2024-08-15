import React from 'react'
import { Editor, updateEditor } from '@teselagen/ove';
import defaultMainEditorProps from './defaultMainEditorProps';
import { tidyUpSequenceData } from '@teselagen/sequence-utils';
import { genbankToJson } from '@teselagen/bio-parsers';
import { useStore } from 'react-redux';

function onCopy(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('overwritten');
}

function EditorComparison() {
    // Read a genbank file and display it in the main editor
    const { parsedSequence } = genbankToJson(`LOCUS       Untitled_Sequence           9 bp    DNA     circular SYN 03-JUN-2024
    FEATURES             Location/Qualifiers
         misc_feature    complement(2..6)
                         /label="Mr Feature"
         misc_feature    2..6
                         /label="Mr Feature 2"
    ORIGIN      
            1 gagagagag     
    //`)[0];
    // Change the strand and circularity of the sequence based on props
    const processedSequence = tidyUpSequenceData(parsedSequence);
    processedSequence.primers = [
        {

            type: "primer_bind",
            strand: -1,
            forward: false,
            name: "T7",
            start: 1,
            end: 3,
            annotationTypePlural: "primers",
            id: "1",
            color: "blue" // <<<<
        },
        {

            type: "primer_bind",
            strand: 1,
            forward: true,
            name: "blah",
            start: 2,
            end: 4,
            annotationTypePlural: "primers",
            id: "2",
            color: "red" // <<<<
        },
    ];
    const store = useStore();
    // Rendering code
    const nodeRef = React.useRef(null);
    React.useEffect(() => {
        const editorProps = {
            sequenceData: processedSequence,
            onCopy,
            ...defaultMainEditorProps,
        };
        updateEditor(store, 'mainEditor', editorProps);
        // editorProps.sequenceData.primers.forEach(p => (p.color = 'green')) // <<<<
        // updateEditor(store, 'mainEditor2', editorProps);
    }, [parsedSequence]);

    return (
        <div className="App">
            <Editor onCopy={onCopy} editorName='mainEditor' height='400'/>
            {/* <Editor editorName='mainEditor2' height='400'/> */}
        </div>
    );
}

export default EditorComparison