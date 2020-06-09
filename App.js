import React, {Component, useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends Component {
  UNSAFE_componentWillMount() {
    const config = {
      apiKey: "AIzaSyC04oXEXKOpVZXmL63Wbf1-lgESP9D05Rc",
      authDomain: "rn-manager-bb7f6.firebaseapp.com",
      databaseURL: "https://rn-manager-bb7f6.firebaseio.com",
      projectId: "rn-manager-bb7f6",
      storageBucket: "rn-manager-bb7f6.appspot.com",
      messagingSenderId: "296053626170",
      appId: "1:296053626170:web:e61aa45f7130db8633ac03",
      measurementId: "G-FESPEQT9F4"
    };
    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
