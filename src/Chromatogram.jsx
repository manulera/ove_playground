import React from 'react'
import { Editor, updateEditor } from '@teselagen/ove';
import defaultMainEditorProps from './defaultMainEditorProps';
import { useStore } from 'react-redux';
import getExampleData from './chromatogram_file';


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
    const [reverseComplement, setReverseComplement] = React.useState(false);
    React.useEffect(() => {
        const d = getExampleData(reverseComplement)
        const editorState = {
            sequenceData: d.sequenceData,
            ...extraProps,

        };
        updateEditor(store, 'mainEditor', editorState);

    }, [reverseComplement]);

    return (
        <div>
            <button 
                onClick={() => setReverseComplement(!reverseComplement)}
                style={{
                    margin: '10px',
                    padding: '5px 10px',
                    cursor: 'pointer'
                }}
            >
                {reverseComplement ? 'Show Original' : 'Show Reverse Complement'}
            </button>
            <Editor
                editorName='mainEditor'
                {...defaultMainEditorProps}
                height='800'
            />
        </div>
    );
}

export default Chromatogram