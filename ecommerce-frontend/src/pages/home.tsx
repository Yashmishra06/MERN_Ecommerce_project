import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"



const Home = () => {
  const addtocartHandler=()=>{};
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>
      <main>
        <ProductCard
        productId="afcdjdw"
        name="macbook-pro"
        price={4545}
        stock={355}
        handler={addtocartHandler}
        photo="https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false"

        />
      </main>
    </div>
  )
}

export default Home