import fetch from "node-fetch";
//Alla filmer: https://plankton-app-xhkom.ondigitalocean.app/api/movies 
//Enstaka film: https://plankton-app-xhkom.ondigitalocean.app/api/movies/<id> 
const api = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function allMovies(){
  const res = await fetch(api + '/movies');
  const movies = await res.json();
  return movies.data
}

export async function specMovie(id){
  const res = await fetch(api + '/movies/' + id);
  const movie = await res.json();
  return movie.data;
}