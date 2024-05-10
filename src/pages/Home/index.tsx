import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promoções" background="gray" />
    <ProductsList title="Em Breve" background="black" />
  </>
)

export default Home
