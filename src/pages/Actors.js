import React from 'react';
import NavBar from '../components/NavBar';

const actors = [
  { name: 'Benedict Cumberbatch', movies: ['Doctor Strange', 'Sherlock', 'The Imitation Game'] },
  { name: 'Leonardo DiCaprio', movies: ['Inception', 'The Revenant'] },
  { name: 'Justin Timberlake', movies: ['The Social Network', 'In Time', 'Friends with Benefits'] },
  { name: 'Anna Kendrick', movies: ['Pitch Perfect', 'Up in the Air', 'Trolls', 'Into the Woods'] },
  { name: 'Tom Cruise', movies: ['Top Gun', 'Mission: Impossible', 'Minority Report', 'Jack Reacher: Never Go Back', 'Mission Impossible 4', 'War of the Worlds'] }, // Added War of the Worlds
  { name: 'Johnny Depp', movies: ['Pirates of the Caribbean', 'Black Mass'] },
];

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;