import baseUrl from '../../constants/baseUrl'
import apiSecKey from '../../constants/apiSecKey'

const getLatestMovies = async (query) => {
  try {
    let data = await fetch(baseUrl + 'getLatestMovies', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ query, apiSecKey })
    })

    return await data.json()
  } catch (error) {
    return error
  }
}

export default getLatestMovies
