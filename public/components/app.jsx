import React, {Component} from 'react';
import MadlibHeader from './madlibHeader';
// import MadlibChoices from './madlibOptions.jsx';
import getMadlib from '../../services/madlibExamples.js';

import { CSSTransitionGroup } from 'react-transition-group'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      madlib: getMadlib(0),
    }
  }

  componentWillMount() {
    let matches = this.state.madlib.match(/\{([^}]+)\}/g);
    console.log(matches);
    // matches = matches.map(val => {
    //   return val.slice(1, val.length - 1);
    // });
    // console.log(matches);

    let choicesOrder = [];
    let choicesCount = {};

    matches.forEach(item => {
      const val = item.slice(1, item.length - 1);
      if (!choicesCount.hasOwnProperty(val)) {
        choicesOrder.push(val);
      }
      choicesCount[val] = choicesCount[val] ? choicesCount[val]+ 1 : 1;
    });

    console.log(choicesCount);
    console.log(choicesOrder);
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="madlibHeader"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <MadlibHeader madlib={this.state.madlib} />
      </CSSTransitionGroup>
    );
  }
};

export default App;
