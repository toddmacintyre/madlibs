import React from 'react';

const madlibHeader = ( {madlib} ) => {
  const madStyle = {
    fontFamily: 'Roboto, sans-serif',
  }

  return (
    <div>
      <h1>
        Crazy Madlibs!!
      </h1>
      <span style={madStyle} >
        {madlib}
      </span>
    </div>
  );
};

export default madlibHeader;
