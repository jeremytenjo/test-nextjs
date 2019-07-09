import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import baserUrl from '../constants/baseUrl'
import getLatestMovies from '../functions/api/getLatestMovies'
// import Poster from '@tenjojeremy/web-toolkit/build/Data-Display/Cards/Poster/Ui/React/Styles/1/poster.1.index.js'
// import List from '@tenjojeremy/web-toolkit/build/Data-Display/List/Ui/React/list.index.js'

const image =
  'https://images-na.ssl-images-amazon.com/images/I/818NtgncwLL._SL1500_.jpg'

const Index = ({ movies = [] }) => {
  const handlePosterClick = async ({ magnet }) => {}

  return (
    <div>
      {/* <List photoGrid onItemClick={(e) => console.log(e)}>
        {movies.map(({ posterUrl, ...rest }) => {
          return <Poster key={posterUrl} src={posterUrl} {...rest} />
        })}
      </List> */}
      <h3> Try Me </h3>
    </div>
  )
}

Index.getInitialProps = async function() {
  const movies = await getLatestMovies()

  return {
    movies
  }
}

export default Index
