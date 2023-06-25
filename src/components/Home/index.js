import Header from '../Header'
import Carousel from '../Carousel'
import PopularRestaurants from '../PopularRestaurants'
import Footer from '../Footer'
import './index.css'

const Home = () => (
  <>
    <Header activeTab="HOME" />
    <Carousel />
    <PopularRestaurants />
    <Footer />
  </>
)

export default Home
