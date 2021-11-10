import Item from "../../components/Item";
import PhotoContextProvider from "../../context/PhotoContext";
import axios from 'axios'
import { apiKey } from '../../config'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'

export default function MountainPage ({ images }) {
  const router = useRouter()
  const { query } = router.query

  function handleSubmit (e, history, searchInput) {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    router.push(url, undefined, {
      shallow: true
    })
  }

  if (router.isFallback) {
    return <Loader />
  }

  return <PhotoContextProvider fallbackData={images}>
    <Header handleSubmit={handleSubmit} />
    <div className="container">
      <Item searchTerm={query} />
    </div>
  </PhotoContextProvider>
}

export async function getStaticProps({ params }) {
  const res = await axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${params.query}&per_page=24&format=json&nojsoncallback=1`
    )
  return {
    props: {
      images: {
        query: params.query,
        data: res.data.photos.photo
      }
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { query: 'mountain' } }
    ],
    fallback: true
  };
}
