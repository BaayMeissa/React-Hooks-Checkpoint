import MovieList from './components/MovieList';
import films from './film';
import AddMovie from './components/addMovie';
import './App.css';
import Filtre from './components/Filtre';
import { useState } from 'react';

function App() {
  const [filtreTitre, setFiltreTitre] = useState('');
  const [filtreNote, setFiltreNote] = useState('')
  const [movies, setMovies] = useState(films)

  const addMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }

  const searchNote = (note)=>{
    setFiltreNote(note)
  }

  const searchTitre = (titre)=>{
    setFiltreTitre(titre);
  }

  const getFilteredMovies = () => {
    return movies.filter((film)=>{
      return film.titre.toLowerCase().includes(filtreTitre.toLowerCase()) && film.note>=Number(filtreNote);
    })
    };

  return (
    <div>
      <Filtre
      searchTitre={searchTitre}
      filtreTitre = {filtreTitre}
      searchNote = {searchNote}
      filtreNote = {filtreNote}
      />
      <MovieList films={getFilteredMovies()}/>
      <AddMovie
      addMovie={addMovie}/>
    </div>
  );
}

export default App;