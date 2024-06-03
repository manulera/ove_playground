import React from 'react';
import EditorComparison from './EditorComparison';


function App() {
  const [strand, setStrand] = React.useState(1)
  const [circular, setCircular] = React.useState(false)
  const [useTidyUpSequenceData, setUseTidyUpSequenceData] = React.useState(false)
  const onButton1Click = () => {
    setStrand((s) => -s)
  }
  const onButton2Click = () => {
    setCircular((c) => !c)
  }
  const onButton3Click = () => {
    setUseTidyUpSequenceData((u) => !u)
  }

  return (
    <>
      <button onClick={onButton1Click}>Change strand</button>
      <button onClick={onButton2Click}>Change linear/circular</button>
      <button onClick={onButton3Click}>{!useTidyUpSequenceData && 'not' } using tidyUpSequenceData</button>
      <EditorComparison strand={strand} circular={circular} useTidyUpSequenceData={useTidyUpSequenceData} />
    </>
  );
}

export default App;
