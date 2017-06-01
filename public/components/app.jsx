import React, {Component} from 'react';
import MadlibHeader from './madlibHeader';
import MadlibChoices from './madlibChoices.jsx';
import getMadlib from '../../services/madlibExamples.js';

import { CSSTransitionGroup } from 'react-transition-group'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      madlib: getMadlib(0),
      alteredMadlib: '',
      order: [],
      choicesOrder: [],
      choicesCount: {},
      submitted: false,
    }

    this.sentenceKey = 0;

    this.submitData = this.submitData.bind(this);
  }

  componentWillMount() {
    let matches = this.state.madlib.match(/\{([^}]+)\}/g);
    console.log(matches);

    let order = [];
    let choicesOrder = [];
    let choicesCount = {};

    matches.forEach(item => {
      const val = item.slice(1, item.length - 1);
      if (!choicesCount.hasOwnProperty(val)) {
        choicesOrder.push(val);
      }
      choicesCount[val] = choicesCount[val] ? choicesCount[val] + 1 : 1;
      order.push(val);
    });

    this.setState({choicesOrder});
    this.setState({choicesCount});
    this.setState({order});
  }

  submitData(data) {
    const entries = this.state.order.reduce((acc, val) => {
      acc.push(data[val].shift());
      return acc;
    }, []);

    const alteredMadlib = this.state.madlib
      .split(/\{[^}]+\}/)
      .map(val => {
        return <span key={`sentenceKey${this.sentenceKey++}`} className="regularText">{val}<span className="insertedText">{entries.shift()}</span></span>;
      });

    this.setState({alteredMadlib});
    this.setState({submitted: !this.state.submitted});
  }

  render() {
    if (!this.state.submitted) {
      return (
        <div>
          <CSSTransitionGroup
            transitionName="madlibHeader"
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionEnter={false}
            transitionLeave={false}
          >
            <MadlibHeader madlib={this.state.madlib} />
          </CSSTransitionGroup>
          <MadlibChoices order={this.state.choicesOrder} count={this.state.choicesCount} gatherData={this.gatherData} submitData={this.submitData} />
        </div>
      );
    } else {

      return (
        <div>
          {this.state.alteredMadlib}
        </div>
      );
    }
  }
};

export default App;
