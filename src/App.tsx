import React from 'react';
import UserList from './components/TableComponent';
import FilterComponent from './components/FilterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <FilterComponent />
        <UserList />
      </div>
    </div>
  );
}

export default App;
