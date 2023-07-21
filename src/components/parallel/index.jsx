import { useEffect, useState } from "react"
import Episode from "./Episodes";

const fetchEpisodes = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  return response.json();
}

const Parallel = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const episodesPromise = async () => {
      const episodesData = await fetchEpisodes();
      setEpisodes(episodesData.results);
    }
    episodesPromise();
  },[])

  return (
    <>
      <h2>Parallel Example</h2>
      {
        episodes.map( item => <Episode key={item.id} episodeData={item}/>)
      }
    </>
  )
}

export default Parallel