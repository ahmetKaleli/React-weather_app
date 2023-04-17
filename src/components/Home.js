import axios from "axios"
import { useEffect, useState } from "react"
import City from "./City"
import "../App.css"
export default function Home() {
  const key ="94da05fabca3d490db1c7f77358c8c42"
  const [city, setCity] = useState()
  const [search, setSearch] = useState("")

  useEffect(()=>{
    async function getApi(){
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`)
        console.log(res)
        setCity(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getApi()
  }, [search])
  return (
    <div>
      <h1>Weather-App</h1>
      <div >
        <input className="cityname" placeholder="enter city name" onChange={(e)=>setSearch(e.target.value)} />
      </div>
      { city && <City city={city}/>}
    </div>
  )
}
