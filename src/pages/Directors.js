import React from 'react';
import NavBar from '../components/NavBar';

const directors = [
  { name: 'Scott Derrickson', movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose'] },
  { name: 'Christopher Nolan', movies: ['Inception', 'Interstellar'] },
  { name: 'Mike Mitchell', movies: ['Shrek Forever After', 'Trolls', 'Alvin and the Chipmunks: Chipwrecked', 'Sky High'] },
  { name: 'Edward Zwick', movies: ['The Last Samurai', 'Blood Diamond', 'Jack Reacher: Never Go Back', 'The Siege'] }, // Added The Siege
];

function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;