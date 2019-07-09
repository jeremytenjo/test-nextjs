const dev = process.env.NODE_ENV !== 'production'

const server = dev
  ? 'http://localhost:3000/'
  : 'https://tv-guide.jeremytenjo.now.sh/'

export default server
