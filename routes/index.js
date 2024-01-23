import express from 'express';
const router = express.Router()
import { allMovies, specMovie } from '../src/fetchMovies.js';
import showdown from 'showdown';

router.get('/', (req, res) =>{
  res.render('index', {title: "Startsida"})
})

router.get('/movies', async (req, res) =>{
  const movieRender = await allMovies();
  res.render('movies', {movieRender: movieRender, title: "Filmer", sectionTitle: "ALLA FILMER"})
})

router.get('/about', (req, res) => {
  res.render('aboutUs', {title: "Om oss"})
})

router.get('/movies/:id', async (req, res) =>{
  const movieRender = await specMovie(req.params.id);
  const converter = new showdown.Converter()
  const markDownText = movieRender.attributes.intro;
  const markDownToHtml = converter.makeHtml(markDownText)
  const elClassAdd = markDownToHtml.slice(0, 2) + ' class="movie__description"' + markDownToHtml.slice(2);
  res.render('movies', {movieRender: movieRender, title: movieRender.attributes.title, sectionTitle: "", markDownText: elClassAdd})
})

export default router