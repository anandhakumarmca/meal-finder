import React, { useState } from 'react';
import '../styles/App.css';
import SearchBar from '../components/SearchBar';
import MealList from '../components/MealList';

function App() {
  const [meals, setMeals] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSearch = (data) => {
    if (data.length === 0) {
      setAlertMessage('No food found');
    } else {
      setAlertMessage('');
    }
    setMeals(data);
  };

  return (
    <div className="App">
      <h1>Meal Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {alertMessage && <div className="alert-message">{alertMessage}</div>}
      <MealList meals={meals} />
    </div>
  );
}

export default App;
