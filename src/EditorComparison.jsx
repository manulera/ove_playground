import React from 'react'
import { SimpleCircularOrLinearView } from '@teselagen/ove';
import { createVectorEditor } from '@teselagen/ove';
import defaultMainEditorProps from './defaultMainEditorProps';
import { tidyUpSequenceData } from '@teselagen/sequence-utils';
import { genbankToJson } from '@teselagen/bio-parsers';


function EditorComparison({ strand, circular, useTidyUpSequenceData }) {
    // Read a genbank file and display it in the main editor
    const { parsedSequence } = genbankToJson(`LOCUS       Untitled_Sequence           9 bp    DNA     circular SYN 03-JUN-2024
    FEATURES             Location/Qualifiers
         misc_feature    complement(2..6)
                         /label="Mr Feature"
    ORIGIN      
            1 gagagagag     
    //`)[0];
    // Change the strand and circularity of the sequence based on props
    parsedSequence.circular = circular;
    parsedSequence.features[0].strand = strand;
    // Use / not use tidyUpSequenceData based on props
    const processedSequence = useTidyUpSequenceData ? tidyUpSequenceData(parsedSequence) : parsedSequence;

    // Rendering code
    const nodeRef = React.useRef(null);
    React.useEffect(() => {
        const editorProps = {
            sequenceData: processedSequence,
            ...defaultMainEditorProps,
        };
        const editor = createVectorEditor(nodeRef.current, { editorName: 'mainEditor', height: '800' });
        editor.updateEditor(editorProps);
    }, [parsedSequence, strand, circular]);

    return (
        <div className="App">
            <SimpleCircularOrLinearView
                sequenceData={processedSequence}
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