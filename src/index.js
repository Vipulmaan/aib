import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


import { MyProvider } from './context';
import './index.css';
import Home from './Components/Home/Home';
import * as serviceWorker from './serviceWorker';
import Brickcalculator from './Components/Brickcalculator/Brickcalculator';



class App extends Component {

    
    render(){
        

      // const store = configureStore({ history });
      return (
        <MyProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
            <Home/>
          </BrowserRouter>
        </MyProvider> 
      );
    }
  }

ReactDOM.render(<App/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
