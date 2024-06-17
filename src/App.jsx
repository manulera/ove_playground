import React from 'react';
import exampleSequenceData from './exampleSequenceData';
import { Editor, updateEditor } from '@teselagen/ove';
import { tidyUpSequenceData } from '@teselagen/sequence-utils';
import { useStore } from 'react-redux';

function App() {
  console.log('hehe')
  const store = useStore();

  React.useEffect(() => {
    const editorProps = {
      sequenceData: tidyUpSequenceData(exampleSequenceData),
    };
    updateEditor(store, 'mainEditor', editorProps)
  }, []);

  return (
    <div className="App">
      <Editor {...{
        editorName: 'mainEditor', height: '800',
      }} />
    </div>
  );
}

export default React.memo(App);
