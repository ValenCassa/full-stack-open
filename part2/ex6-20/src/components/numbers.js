import personServices from '../services/services'

const deleteName = (id, setPersons, persons, person, setErrorMessage) => {
    if (window.confirm('Do you really want to delete this number?')) {
        personServices
        .deletePerson(id)
        .then(
            () => {
                setPersons(persons.filter(p => p.id !== id))
                setErrorMessage(`Deleted ${person}`)
            })
        
        .catch(error => {
            setErrorMessage(`${person} has already been removed`)
            setPersons(persons.filter(p => p.id !== id))
        })

        setTimeout(() => {
          setErrorMessage('')
        }, 5000)
        
    }
  }

const Numbers = ({persons, filter, setPersons, setErrorMessage}) => {
    if (filter === '') {
        return (
            <div>
            {persons.map((person) => {
                return(
                <h4 key={person.name}>{person.name} {person.number} <button onClick={() => deleteName(person.id, setPersons, persons, person.name, setErrorMessage)}>Delete</button></h4>
                )
              })}
            </div>
        )
    }else {
        return (
            persons.map((person) => {
                if (person.name.toLowerCase().includes(filter.toLowerCase())) {
                    return (
                        <h4 key={person.name}>{person.name} {person.id} {person.number} <button onClick={() => deleteName(person.id, setPersons, persons, person.name, setErrorMessage)}>Delete</button></h4>
                    )
                }
            })
        )
    }
}

export default Numbers