import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Filter from './components/filter';
import Countries from './components/countries';

const App = () => {
  const [newFilter, setFilter] = useState('')
  const [newCountries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  console.log(newCountries);

  const handleClick = (e) => {
    e.preventDefault()
    setResult(!showResult)
  }



  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
    <Filter filter={newFilter} handleChange={handleFilter}/>
    <Countries filter={newFilter} countries={newCountries}/>
    </>
  );
}

export default App;
