import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser} from './actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <React.Fragment>
          <CssBaseline/>
          <div className="App">
            <BrowserRouter>
              <div>
                <NavBar/>
                <Switch>
                  {/* <Route exact path="/" component={Front} /> */}
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
      </React.Fragment>
    );
  }
}

export default connect(null, {fetchUser})(App);
