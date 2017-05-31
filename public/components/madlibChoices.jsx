import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const MadlibChoices = ( {order, count, gatherData, submitData} ) => {
  return (
    <div>
      {order.map(choice => {
        let result = [];
        for (let i = 0; i < count[choice]; i++) {
          result.push(
            <div>
              <TextField
                hintText={choice}
              />
              <br />
            </div>
          );
        }
        return result;
      })}
      <FlatButton
        label="Submit"
        onTouchTap={() => {
          gatherData();
          submitData();
        }}
      />
    </div>
  )
}

export default MadlibChoices;
