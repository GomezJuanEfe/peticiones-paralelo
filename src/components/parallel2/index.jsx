import { useState, useEffect } from "react"
import getData from './utils.js'

const Parallel2 = () => {
  const [data, setData] = useState();
  
  useEffect(() => {
    setTimeout(() => {
      getData()
        .then(data => setData(data))
    }, 5000)
  }, [])

  return (
    <>
      <h2>Parallel</h2>
      { !data && <div className="loading"><span>Loading...</span></div>}
      { 
        data?.map( item => {
          return (
            <div key={item.id} className="episode-card">
              <h3>{item.name}</h3>
              {
                item.characters.map( (item, index) => <li key={index}>{`${item.name} - ${item.species}`}</li>)
              }
            </div>
          )
        })
      }
    </>
  )
}

export default Parallel2