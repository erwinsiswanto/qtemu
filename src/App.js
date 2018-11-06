import React, {Component} from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Footer from './footer/Index';
import { Provider } from 'react-redux';
import store from './config/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <BrowserRouter>
                        <div className="myApp">
                            <Navbar/>
                            <Route exact path="/" render={() => (<Home/>)}/>
                            <Route path="/about" component={About}/>
                            <Route path="/profile/:id" component={Profile}/>
                        </div>
                    </BrowserRouter>

                    <Footer/>
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
