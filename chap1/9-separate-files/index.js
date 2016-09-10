class HelloReact extends React.Component {
    render() {
        return React.DOM.h1(null, 'Hello React');
    }
}

ReactDOM.render(React.createElement(HelloReact), document.getElementById('index'));
