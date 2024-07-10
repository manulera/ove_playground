import React from 'react';
import EditorComparison from './EditorComparison';


function App() {
  const [hidden, setHidden] = React.useState(false)
  const [hiddenAll, setHiddenAll] = React.useState(false)

  const onButton1Click = () => {
    setHidden((s) => !s)
  }
  const onButton2Click = () => {
    setHiddenAll((s) => !s)
  }

  return (
    <>
      <button onClick={onButton1Click}>Hide feature</button>
      <button onClick={onButton2Click}>Hide all features</button>
      <EditorComparison hideFeature={hidden} hideAll={hiddenAll} />
    </>
  );
}

export default App;
