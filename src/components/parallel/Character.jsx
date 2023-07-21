import { useState, useEffect } from "react"

const fetchCharacter = async (url) => {
  const data = await fetch(url);
  return data.json()
}

const Character = ({characterUrl}) => {
  const [characterData, setCharacterData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const info = await fetchCharacter(characterUrl)
      setCharacterData({name: info.name, species: info.species});
    }
    fetchData()
  }, [])

  return (
    <li>
      - {characterData.name} - {characterData.species}
    </li>
  )
}

export default Character