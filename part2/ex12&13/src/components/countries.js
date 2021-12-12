const Countries = ({filter, countries}) => {
    let countries2 = []
    console.log(countries2)

    countries.forEach((country) => {
        if (country.altSpellings[1] !== undefined && country.altSpellings[1].toLowerCase().includes(filter.toLowerCase())) {
           countries2.push(country)
        }
    })

    if (filter === '') {
        return (
            <div>Input a country</div>
        )
    }else if (countries2.length > 10 || countries2.length < 1) {
        return (
            <div>Be more specific</div>
        )
    }else if(countries2.length === 1) {
        return (
            <div>
                <p>capital: {countries2[0].capital}</p>
                <p>population: {countries2[0].population}</p>

                <h3>Languages</h3>
                <ul>
                {Object.values(countries2[0].languages).map((value, i) => {
                    return(
                    <li key={i}>{value}</li>
                    )
                })}
                </ul>

                <img src={Object.values(countries2[0].flags)[0]}></img>
            
            </div>
        )
    }
    else {
            return (
                countries2.map((c, i) => {
                    return (
                        <div key={i}>
                            <div>{c.altSpellings[1]}</div>  
                        </div>
                    )
                })
            )
        }
    }



export default Countries