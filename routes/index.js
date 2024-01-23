import express from 'express';
const router = express.Router()
import { allMovies, specMovie } from '../src/fetchMovies.js';

router.get('/', (req, res) =>{
  res.render('index', {})
})

router.get('/movies', async (req, res) =>{
  const moviesArr = await allMovies();
  res.render('movies', {moviesArr: moviesArr})
})

router.get('/about', (req, res) => {
  res.render('aboutUs', {})
})

router.get(`/movies/id`, (req, res) =>{

})

export default router