import Item from "../components/Item";
import PhotoContextProvider from "../context/PhotoContext";
import axios from 'axios'
import { apiKey } from '../config'
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function MountainPage ({ images }) {
  const router = useRouter()

  function handleSubmit (e, history, searchInput) {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    router.push(url)
  }

  return <PhotoContextProvider fallbackData={images}>
    <Header handleSubmit={handleSubmit} />
    <div className="container">
      <Item searchTerm="mountain" />
    </div>
  </PhotoContextProvider>
}

export async function getStaticProps(context) {
  const res = await axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountain&per_page=24&format=json&nojsoncallback=1`
    )
  return {
    props: {
      images: {
        query: 'mountain',
        data: res.data.photos.photo
      }
    }
  }
}