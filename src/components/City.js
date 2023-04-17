import React from 'react'
import "../App.css"
const City = ({city})=>{
    console.log(city)
    return <div>
        <div className='weather'>
            <h1>{city.main.temp}</h1>
            <h1>{city.name}</h1>
            <h1>{city.weather[0].main}</h1>
        </div>
    </div>
}
export default City
