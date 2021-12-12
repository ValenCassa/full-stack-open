const Form = ({addName, newName, onChangeName, newPhone, onChangePhone}) => {
    return (
        <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onChangeName}/>
        </div>
        <div>
          phone: <input value={newPhone} onChange={onChangePhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form