import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    appData: 'React Marathon'
  };

  updateState = () => {
    this.setState({
      appData : this.state.appData.toLowerCase()
    });
  };
  render() {
    return( <div onClick={this.updateState}>
      {this.state.appData}
      </div>    
    );
  }
}
