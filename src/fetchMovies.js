import fetch from "node-fetch";
const api = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function allMovies() {
  const res = await fetch(api + '/movies');
  const movies = await res.json();
  const modifiedArray = movies.data.map((obj) => {
    return {
      id: obj.id,
      ...obj.attributes,
    }
  })
  return modifiedArray;
}

export async function specMovie(movieId) {
  try {
    const res = await fetch(api + '/movies/' + movieId);
    const movie = await res.json();
    const makeArray = Object.keys(movie).map(function (key) {
      return movie[key];
    });
    const modifyArray = makeArray.map((obj) => {
      return {
        id: obj.id,
        ...obj.attributes,
      }
    })
    const modifiedObject = modifyArray[0]

    return modifiedObject;
  }
  catch {
    const notFound = 'Page not found'
    return notFound
  }
}