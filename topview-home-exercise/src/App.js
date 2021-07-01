import React, { useState } from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

import './App.css';

const DEFAULT_FILTERS = {
  all: true,
  busStop: false,
  attraction: false,
  park: false,
  museum: false,
}

function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const handleChangeFilters = (item) => {
    const newFilters = {...filters};
    newFilters[item] = !filters[item];
    newFilters.all = !newFilters.busStop && !newFilters.attraction && !newFilters.park && !newFilters.museum;
    setFilters({...newFilters});
  }
  return (
    <div className="App">
      <Header filters={filters} changeFilters={handleChangeFilters} />
      <MainContent filters={filters} />
    </div>
  );
}

export default App;
