import Header from '../../componets/header'
import ProductsHeading from '../../componets/productsHeading'
import './style.scss'
import Minicard from '../../componets/Minicard'

import { products } from '../../data/products'
import Raitingcard from '../../componets/Raitingcard'




const HomePages = () => {
  return (
    <div className='HomePage'>
      <Header />
      <section className='category-sec'>
        <ProductsHeading title={"Explore Categories"} />
        <section className='category-cards'>
          <div className="container">

            {
              products.map(item => {
                return (
                  <Minicard
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    stockCount={item.stockCount}
                    background={item.background} />
                )


              })
            }
          </div>
        </section>

        <section className="Featured">
          <ProductsHeading title={"Featured Products"} />
          <section className="Featured-Products">
            <div className="container">
              <Raitingcard />
              <Raitingcard />
              <Raitingcard />
              <Raitingcard />

            </div>
          </section>
        </section>

      </section>
    </div>

  )
}

export default HomePages