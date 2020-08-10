import React from 'react';
import './App.css';
import GitCompanies from './Components/GitCompaniesList/GitCompanies';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <GitCompanies />
    </div>
  );
}

export default App;