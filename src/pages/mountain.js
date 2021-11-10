import Item from '../components/Item'
import PhotoContextProvider from '../context/PhotoContext'
import Header from '../components/Header'
import axios from 'axios'
import { apiKey } from '../api/config'

export default function MountainPage ({ images }) {
  function handleSubmit (e, history, searchInput) {
    e.preventDefault()
  }

  return <PhotoContextProvider fallbackData={images}>
    <div className="container">
      <Header handleSubmit={handleSubmit} />
      <Item searchTerm="mountain" />
    </div>
  </PhotoContextProvider>
}

export async function getStaticProps(context) {
  const response = await axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountain&per_page=24&format=json&nojsoncallback=1`
  )
  return {
    props: {
      images: response.data.photos.photo
    }, // will be passed to the page component as props
  }
}
