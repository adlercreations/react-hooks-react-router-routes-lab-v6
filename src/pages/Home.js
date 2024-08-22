import React from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

const movies = [
  { id: 1, title: 'Doctor Strange' },
  { id: 2, title: 'Inception' },
  { id: 3, title: 'Interstellar' },
];

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;