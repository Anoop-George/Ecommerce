import React, { Component } from "react";
import { render } from "react-dom";
import FullWidthGrid from "./components/Outline";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducer/rootReducer'
import {HashRouter} from 'react-router-dom';
import Routing from './components/routing'


const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
         <Routing/>
      </HashRouter>
      
      </Provider>
  )
}

export default App
const container = document.getElementById("app");
render(<App />, container);