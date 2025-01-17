
export default {
    isFullscreen: false,
    annotationVisibility: { reverseSequence: true, cutsites: false, chromatogram: true },
    ToolBarProps: {
        toolList: [
            'saveTool',
            'downloadTool',
            'cutsiteTool',
            'featureTool',
            'alignmentTool',
            'orfTool',
            'findTool',
            'visibilityTool',
        ],
    },
    adjustCircularLabelSpacing: true,
    panelsShown: [[
        {
            id: 'rail',
            name: 'Linear Map',
        },
        {
            active: true,
            id: 'sequence',
            name: 'Sequence Map',
        },
        {
            id: 'circular',
            name: 'Circular Map',
        },
        {
            id: 'properties',
            name: 'Properties',
        },
    ]],
};
