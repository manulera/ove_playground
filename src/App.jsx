import React from 'react';
import EditorComparison from './EditorComparison';


function App() {
  const [strand, setStrand] = React.useState(1)
  const [circular, setCircular] = React.useState(false)
  const onButton1Click = () => {
    setStrand((s) => -s)
  }
  const onButton2Click = () => {
    setCircular((c) => !c)
  }

  return (
    <>
      <button onClick={onButton1Click}>Change strand</button>
      <button onClick={onButton2Click}>Change linear/circular</button>
      <EditorComparison strand={strand} circular={circular} />
    </>
  );
}

export default App;
