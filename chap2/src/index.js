import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './1-firstapp';
import HelloReact from './2-composition';
import HellpApp from './3-compbehavior';
import ButtonApp from './4-extractbutton';

//ReactDOM.render(<FirstApp fname="sanjay" />, document.getElementById('container'));
//ReactDOM.render(<HelloReact />, document.getElementById('container'));
//ReactDOM.render(<HellpApp />, document.getElementById('container'));
ReactDOM.render(<ButtonApp />, document.getElementById('container'));