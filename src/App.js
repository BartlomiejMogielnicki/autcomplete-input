import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import SearchForm from './components/SearchForm';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchForm />
      </div>
    </Provider>
  );
};

export default App;
