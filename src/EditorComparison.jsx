import React from 'react'
import { SimpleCircularOrLinearView } from '@teselagen/ove';
import { createVectorEditor } from '@teselagen/ove';
import defaultMainEditorProps from './defaultMainEditorProps';
import { tidyUpSequenceData } from '@teselagen/sequence-utils';


function EditorComparison({ strand, circular }) {
    const seq = tidyUpSequenceData({
        circular,
        sequence: "gagagagag",
        features: [{ id: "lalala", name: "Mr Feature", start: 1, end: 5, strand }]
    })
    const nodeRef = React.useRef(null);
    React.useEffect(() => {
        const editorProps = {
            sequenceData: seq,
            ...defaultMainEditorProps,
        };
        const editor = createVectorEditor(nodeRef.current, { editorName: 'mainEditor', height: '800' });
        editor.updateEditor(editorProps);
    }, [seq]);

    return (
        <div className="App">
            <SimpleCircularOrLinearView
                sequenceData={seq}
                editorName="previewEditor"
                annotationLabelVisibility={{
                    //set visibilities as you please
                    features: true,
                    parts: true,
                    cutsites: false,
                    primers: true
                }}
            ></SimpleCircularOrLinearView>
            <div ref={nodeRef} />
        </div>
    );
}

export default EditorComparison