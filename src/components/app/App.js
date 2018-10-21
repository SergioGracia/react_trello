import React,  {Component} from 'react';
import ReactDOM from 'react-dom';
import Lista from '../lista/Lista';

export default class App extends Component{

    render()
    {
        return(
            <React.Fragment>
                <h1>Hola mundo</h1>
                <Lista></Lista>
            </React.Fragment>
            
        )
    }
}