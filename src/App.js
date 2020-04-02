import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import store  from './store';
// const store = createStore(() => [], {}, applyMiddleware());
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
          <Post />
      </div>
    </Provider>
  );
}

export default App;
