import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const MadlibChoices = ( {order, count, submitData} ) => {
  let madlibChoicesKey = 0;
  let totalCount = 0;
  return (
    <div>
      {order.map(choice => {
        let result = [];
        for (let i = 0; i < count[choice]; i++) {
          result.push(
            <div key={madlibChoicesKey++}>
              <TextField
                className="textInput"
                hintText={choice}
                data-choice={choice}
              />
              <br />
            </div>
          );
          totalCount++;
        }
        return result;
      })}
      <FlatButton
        label="Submit"
        onTouchTap={() => {
          let inputFields = document.getElementsByClassName('textInput');
          inputFields = Array.prototype.slice.call(inputFields);
          const data = inputFields.reduce((acc, input) => {
            let element = input.getElementsByTagName('input')[0];
            let value = element.value;
            let choice = element.dataset.choice;
            if (!acc[choice]) {
              acc[choice] = [];
            }
            acc[choice].push(value);
            return acc;
          }, {});
          submitData(data);
        }}
      />
    </div>
  )
}

export default MadlibChoices;
