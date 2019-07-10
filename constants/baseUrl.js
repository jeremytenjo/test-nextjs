const dev = process.env.NODE_ENV !== 'production'

const server = dev
  ? 'http://localhost:5000/movies-series-guide/us-central1/api/'
  : 'https://us-central1-movies-series-guide.cloudfunctions.net/api/'

export default server
