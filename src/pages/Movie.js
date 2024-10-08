import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const movies = [
  { id: 1, title: 'Doctor Strange', time: '115 min', genres: ['Action', 'Adventure', 'Fantasy'] },
  { id: 2, title: 'Inception', time: '148 min', genres: ['Sci-Fi', 'Thriller'] },
  { id: 3, title: 'Interstellar', time: '169 min', genres: ['Sci-Fi', 'Drama'] },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map(genre => (
        <span key={genre}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;