import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createSagaMiddleware from "redux-saga";
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import App from './App';
import reducer from './reducers'
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
