import React from 'react'
import { Editor, updateEditor } from '@teselagen/ove';
import defaultMainEditorProps from './defaultMainEditorProps';
import { useStore } from 'react-redux';
import chromatogram_file from './chromatogram_file';

const extraProps = {
    annotationVisibility: {
        chromatogram: true,
        features: true,
        primers: false,
        // parts: false,
        cutsites: false
        // orfTranslations: false
    },
    panelsShown: [
        [
            {
                id: "rail",
                name: "Linear Map"
            },
            {
                id: "sequence",
                name: "Sequence Map",
                active: true
            },
            {
                // fullScreen: true,
                id: "circular",
                name: "Circular Map"
            },
            {
                id: "properties",
                name: "Properties"
            }
        ]
    ]
}

function Chromatogram() {
    const store = useStore();
    React.useEffect(() => {
        const editorState = {
            sequenceData: chromatogram_file.sequenceData,
            ...extraProps,

        };
        updateEditor(store, 'mainEditor', editorState);

    }, [store]);

    return (
        <Editor
            editorName='mainEditor'
            {...defaultMainEditorProps}
            height='800'
        />
    );
}

export default Chromatogram