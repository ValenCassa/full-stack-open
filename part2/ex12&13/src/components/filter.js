const Filter = ({filter, handleChange}) => {
    return (
        <div>Search Countries <input value={filter} onChange={handleChange} /></div>
    )
}

export default Filter