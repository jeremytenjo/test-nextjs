const getMoviesSeries = async (query) => {
  try {
    let data = await fetch(window.apiURL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ query, apiSecKey: window.apiSecKey })
    })
    return await data.json()
  } catch (error) {
    return error
  }
}

export default getMoviesSeries
