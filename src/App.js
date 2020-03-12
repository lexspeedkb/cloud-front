import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { withRouter } from "react-router";
import $ from "jquery";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Containers
import Login   from './containers/Login';
import Another from './containers/Another';
import Home    from './containers/Home';

// Reducers
import { credentialsReducer } from './store/credentials';
import { galleryReducer }     from "./store/gallery";
import { usersReducer }       from './store/user';

// Constan
import {API_SERVER} from "./const";
import LayoutDrawer from "./components/LayoutDrawer";

const store = createStore(
  combineReducers({
    credentials: credentialsReducer,
    users: usersReducer,
    gallery: galleryReducer
  })
);

class App extends PureComponent {
  componentDidMount() {
      $.ajax({
          url: API_SERVER+'checkToken',
          type: 'POST',
          data: {id: localStorage.getItem('id'), token: localStorage.getItem('token')},
      })
          .done((data) => {
              console.log(data);
              if (data==="1") {
                  this.props.history.push('/login');
              }
          })
          .fail(function() {
              console.log("error");
          })
          .always(function() {
              console.log("complete");
          });
  }

  render() {
    return (
      <Provider store={store}>
          <LayoutDrawer/>
          <Route path="/login">
              <Login />
              <hr />
              <Another />
          </Route>

          <Route path="/home">
              <Home />
              {/*<button onClick={}>Logout</button>*/}
          </Route>

          {/*<HomeRoute path="/" component={Home} />*/}
      </Provider>
    );
  }
}

export default withRouter(App);


// как работают лиснеры
/*
const PageObject = {
  _state: 0,
  _listeners: [],
  setState(state) {
    this._state = state;

    this._listeners.forEach(listener => listener(this._state));
  },
  subscribe(fn) {
    this._listeners.push(fn)
  }
}

PageObject.subscribe(value => (
  setTimeout(() => {
    console.log('First', value)
  }, 1000)
));

PageObject.subscribe(value => (
  setTimeout(() => {
    console.log('Second', value)
  }, 2000)
));

PageObject.subscribe(value => (
  setTimeout(() => {
    console.log('Third', value)
  }, 3000)
));

setTimeout(() => {
  PageObject.setState(5);
}, 5000);
*/