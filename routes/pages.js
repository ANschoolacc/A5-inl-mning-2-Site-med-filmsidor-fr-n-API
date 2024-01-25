import express from 'express';
const router = express.Router()
import { allMovies, specMovie } from '../src/fetchMovies.js';
import markDownConv from '../src/markConv.js';

router.get('/', (req, res) => {
  res.render('index', { title: "Startsida" })
})

router.get('/movies', async (req, res) => {
  const movieRender = await allMovies();
  res.render('movies', { movieRender: movieRender, title: "Filmer", sectionTitle: "ALLA FILMER" })
})

router.get('/about', (req, res) => {
  res.render('aboutUs', { title: "Om oss" })
})

router.get('/movies/:id', async (req, res) => {
  const movieRender = await specMovie(req.params.id);
  if (movieRender === 'Page not found') {
    const errorText = 'Filmen kunde inte hittas!'
    res.status(404)
    res.render('movies', { movieRender: errorText, title: 'Page not found', sectionTitle: '' })
  } else {
    res.render('movies', { movieRender: movieRender, title: movieRender.title, sectionTitle: "", markDownText: markDownConv(movieRender.intro) })

  }

})

export default router