import CategoryMenu from "../components/CategoryMenu"
import NavBar from "../components/NavBar"
import FoodItems from '../components/FoodItems'
import Cart from "../components/Cart"

const Home = () => {
  return (
    <>
      <NavBar />
      <CategoryMenu/>
      <FoodItems />
      <Cart />
    </>
  )
}

export default Home