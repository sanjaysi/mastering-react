import React from 'react';
import ReactDOM from 'react-dom';

class MultipleProps extends React.Component {
  // within class it should be static
  // Better approach is to define it outside class
  /*
  static propTypes = {
      fname: React.PropTypes.string.isRequired,
      lname: React.PropTypes.string
  };
  */

  // getInitialState in ES6 - should be used in constructor()
  constructor(props) {
    super(props);

    this.state = {
      message: 'I am default message'
    };
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage(e) {
    this.setState({
      message: e.target.value
    });
  }
  render() {
    var fname = this.props.fname,
        lname = this.props.lname;

    return(
      <div>
        <div>Hello: {fname} {lname}</div>
        <div>Message: <h2>{this.state.message}</h2></div>
        <input
          type='text'
          onChange={this.updateMessage} />
      </div>
    );
  }
}

// Better approach
MultipleProps.propTypes = {
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string
};

// setting defaultProps
MultipleProps.defaultProps = {
  lname: 'singh'
}

ReactDOM.render(<MultipleProps fname="sanjay" />, document.getElementById('container'));
