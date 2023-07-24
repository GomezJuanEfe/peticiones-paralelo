const getAllEpisodes = async() => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  return data.results
}

const getCharacterInfo = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data
}

const main = async () => {
  let episodes = await getAllEpisodes();
  const characters = new Set();

  episodes.forEach(episode => {
    episode.characters.slice(0, 10).forEach( character => {
      characters.add(getCharacterInfo(character))
    });
  });

  const dataCharacters = await Promise.all(characters);

  episodes = episodes.map(i => {
    return {
      id: i.id,
      name: `${i.name} - ${i.air_date} - ${i.episode}`,
      characters: i.characters.slice(0, 10).map( url => {
        const { name, species } = dataCharacters.find( item => item.url === url)
        return { name, species }
      })
    }
  })
  return episodes
}

export default main