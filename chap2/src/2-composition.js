import React, {Component} from 'react';

class HelloMessage extends Component {
	render() {
		return(
			<div>{this.props.message}</div>
		);
	}
}

class HelloReact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'default'
		};
		this.updateMessage = this.updateMessage.bind(this);
	}
	updateMessage() {
		this.setState({message: this.refs.txtBox.value});
	}

	render() {
		return(
			<div>
				<HelloMessage message={this.state.message} />
				<input
					type='text'
					ref='txtBox' />
				&nbsp; &nbsp;
				<button
					type='button'
					onClick={this.updateMessage} >Update</button>
			</div>
		);
	}
}

export default HelloReact;