import Character from "./Character";

const Episode = ({episodeData}) => {
  const {name, air_date, episode, characters, id} = episodeData;

  return (
    <div className="episode-card">
      <p>{id}</p>
      <h3>{`${name} - ${episode}`}</h3>
      <h3>{`Fecha al aire: ${air_date}`}</h3>
      <h3>Personajes: </h3>
      <ul className="episode-card-list">
        {
          characters.map( (item, index) => {
            if (index < 10) {
              return <Character key={index} characterUrl={item} />
            }
          }
        )}
      </ul>
    </div>
  )
}

export default Episode