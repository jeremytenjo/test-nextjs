const fetch = require('node-fetch')
const TorrentSearchApi = require('torrent-search-api')
TorrentSearchApi.enableProvider('1337x')

exports.latestMoviess = async () => {
  let resultLimit = 10

  const movies = await TorrentSearchApi.search('2019', 'Movies', resultLimit)

  let moviesList = await movies.map(async (serie, index) => {
    let magnet = await TorrentSearchApi.getMagnet(serie)
    serie.magnet = magnet
    return serie
  })

  let data = await Promise.all(moviesList)

  let latestMovies = await data.map(async (movie) => {
    let formatTitle = movie.title.replace(/ *\([^)]*\) */g, '')
    formatTitle = formatTitle.replace(/ *\[[^\]]*]/g, '')

    let seriesInfo = await getMovieInfo(formatTitle)
    let posterUrl =
      'https://s3-ap-southeast-1.amazonaws.com/popcornsg/placeholder-movieimage.png'

    if (seriesInfo.results[0]) {
      posterUrl = `http://image.tmdb.org/t/p/w185/${
        seriesInfo.results[0].poster_path
      }`
    }

    return seriesInfo
      ? {
          magnet: movie.magnet,
          posterUrl,
          id: movie.peers,
          title: movie.title
        }
      : null
  })

  return await Promise.all(latestMovies)
}

const getMovieInfo = async (query) => {
  try {
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2388873e04ec158e7436ea33b73e5002&language=en-US&page=1&query=${encodeURIComponent(
        query
      )}`
    )
    return await data.json()
  } catch (error) {
    return error
  }
}
