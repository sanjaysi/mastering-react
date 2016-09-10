import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
    render() {
        return React.DOM.h1(null, 'Hello React');
    }
}

class HelloProps extends React.Component {
  render() {
    return(
        <div>
          Hello: {this.props.name}
        </div>
    );
  }
}

class MultipleProps extends React.Component {
  render() {
    var fname, lname = this.props.name;

    return(
      <div>Hello: {fname} {lname}</div>
    );
  }
}


//ReactDOM.render(<HelloReact />, document.getElementById('container'));
//ReactDOM.render(<HelloProps name="sanjay singh" />, document.getElementById('container'));
ReactDOM.render(<MultipleProps name="sanjay singh" />, document.getElementById('container'));
