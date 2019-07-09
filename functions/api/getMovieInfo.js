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

export default getMovieInfo
