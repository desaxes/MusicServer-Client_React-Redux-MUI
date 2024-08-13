import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import React from 'react';
import MainContainer from './components/main-container.tsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
