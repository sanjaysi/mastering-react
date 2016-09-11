import React, {Component} from 'react';

class Message extends Component {
	render() {
		return (
			<h2>Hello {this.props.name}</h2>
		);
	}
}

class MyButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
            {this.props.children}
            </button>
        );
    }
}

class TextBox extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isEdit: true,
		};

		this.edit = this.edit.bind(this);
		this.update = this.update.bind(this);
	}
	toggle() {
		let current  = this.state.isEdit;
		this.setState({isEdit : !current});
	}
	edit() {
		this.toggle();
	}
	update() {
		this.toggle();
		this.props.update(this.props.name, this.refs.messageTextBox.value);
	}
	render() {
		return (
			<div>
				<label>{this.props.label}</label>
				<input type='text' disabled={this.state.isEdit} ref='messageTextBox'/>
				{
					this.state.isEdit ? 
						<MyButton onClick={this.edit}>Edit</MyButton>
						:
						<MyButton onClick={this.update}>Update</MyButton>
				}
			</div>
		);
	}	
}

class ExtractButtonApp extends Component {
	constructor(props) {
		super(props);
		this.state = {firstName: 'fname', lastName: 'lname'};
		this.update = this.update.bind(this);
	}
	update(name, value) {
		let newState = {};
		newState[name] = value;
		this.setState(newState);
	}
	render() {
		return (
			<div>
				<Message name={this.state.firstName + ' ' + this.state.lastName}/>
				<TextBox label='First name' name='firstName' update={this.update}/>
				<TextBox label='Last name' name='lastName' update={this.update}/>
			</div>
		);
	}
}

export default ExtractButtonApp;