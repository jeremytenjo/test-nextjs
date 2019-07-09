import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import baserUrl from '../constants/baseUrl'

import Poster from '@tenjojeremy/web-toolkit/build/Data-Display/Cards/Poster/Ui/React/Styles/1/poster.1.index.js'
import List from '@tenjojeremy/web-toolkit/build/Data-Display/List/Ui/React/list.index.js'

const image =
  'https://images-na.ssl-images-amazon.com/images/I/818NtgncwLL._SL1500_.jpg'

const Index = ({ movies }) => {
  const handlePosterClick = async ({ magnet }) => {
    window.location = magnet
  }

  return (
    <div>
      <List photoGrid>
        {movies.map(({ posterUrl, ...rest }) => {
          return (
            <Poster
              key={posterUrl}
              src={posterUrl}
              {...rest}
              onClick={handlePosterClick}
            />
          )
        })}
      </List>
    </div>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch(`${baserUrl}api/movies/allMovies`)
  const movies = await res.json()

  return {
    movies
  }
}

export default Index
