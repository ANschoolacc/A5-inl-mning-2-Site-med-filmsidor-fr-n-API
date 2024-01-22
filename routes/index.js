import fetch from "node-fetch";
import express from 'express';
const router = express.Router()

router.get('/', (req, res) =>{
  res.render('index', {})
})

router.get('/movies', (req, res) =>{
  res.render('movies', {})
})

router.get('/about', (req, res) => {
  res.render('aboutUs', {})
})

export default router