
import './App.css';
import React, { useState, useEffect } from 'react'
import Numbers from './components/numbers';
import Filter from './components/filter';
import Form from './components/form';
import axios from 'axios';
import personServices from './services/services'
import Notification from './components/notification';

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] =useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  

  const addName = (event) => {
    event.preventDefault()

    const person = persons.find(person => person.name === newName)

    if (person) {
      if (window.confirm('Name already exist, do you want to replace the number?')) {
        const changedNumber = {...person, number: newPhone}
        personServices
          .update(person.id, changedNumber)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.name !== newName ? p : returnedPerson))
          })
      }
    }else {
      const newObj = {
        name: newName,
        number: newPhone
      }

      personServices
        .create(newObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })

      setErrorMessage(`Added ${newName}`)
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)

    }

    setNewName('')
    setNewPhone('')
  }



  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }


  return (
    
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} onChange={handleNewFilter}/>
      <Notification message={errorMessage}/>
      <Form addName={addName} newName={newName} newPhone={newPhone} onChangeName={handleNewName} onChangePhone={handleNewPhone}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={newFilter} setPersons={setPersons} setErrorMessage={setErrorMessage}/>
    </div>
  )
}


export default App;
