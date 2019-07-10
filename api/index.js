const functions = require('firebase-functions')
const cors = require('cors')
const express = require('express')
const TorrentSearchApi = require('torrent-search-api')
const { latestMoviess } = require('./requests/latestMovies')

TorrentSearchApi.enableProvider('1337x')
const app = express()
const secKey = 'newhouse'

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

// Add middleware to authenticate requests
app.use(function(req, res, next) {
  let apiSecKey = req.body.apiSecKey
  if (apiSecKey === secKey) {
    next()
  } else {
    res.json('false')
  }
})

app.post('/auth', async (req, res, next) => {
  res.json('true')
})

//Routes
app.post('/getEpisodes', async (req, res, next) => {
  let query = req.body.query
  let resultLimit = 10

  const series = await TorrentSearchApi.search(query, 'TV', resultLimit)
  let seriesList = await series.map(async (serie, index) => {
    // set magnet
    let magnet = await TorrentSearchApi.getMagnet(serie)
    serie.magnet = magnet
    return serie
  })
  let data = { episodeList: await Promise.all(seriesList) }

  res.json(data)
})

app.post('/getLatestMovies', async (req, res, next) => {
  const latestMovies = await latestMoviess()
  res.json(latestMovies)
})

app.post('/', async (req, res, next) => {
  let query = req.body.query
  let resultLimit = 5

  // Movies
  const movies = await TorrentSearchApi.search(query, 'Movies', resultLimit)
  let movieList = await movies.map(async (movie, index) => {
    // set magnet
    let magnet = await TorrentSearchApi.getMagnet(movie)
    movie.magnet = magnet
    return movie
  })

  // Tv Shows
  const series = await TorrentSearchApi.search(query, 'TV', resultLimit)
  let seriesList = await series.map(async (serie, index) => {
    // set magnet
    let magnet = await TorrentSearchApi.getMagnet(serie)
    serie.magnet = magnet
    return serie
  })

  // Export
  let data = {
    moviesList: await Promise.all(movieList),
    seriesList: await Promise.all(seriesList)
  }
  res.json(data)
})

exports.api = functions.https.onRequest(app)
