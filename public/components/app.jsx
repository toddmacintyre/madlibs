import React from 'react';
import madlib from '../../services/madlibExamples.js';

const App = (props) => {
  return (
    <div>{madlib(0)}</div>
  );
};

export default App;