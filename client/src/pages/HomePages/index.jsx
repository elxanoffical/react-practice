import Header from '../../componets/header'
import ProductsHeading from '../../componets/productsHeading'
import './style.scss'
import Minicard from '../../componets/Minicard'
import Footer from '../../componets/footer'
import Horizontalproduct from '../../componets/horizontalproduct'


import { products } from '../../data/products'
import { featured_products } from '../../data/feature-product'
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
              {
                featured_products.map(item => {
                  return (
                    < Raitingcard item={item} />

                  )

                })

              }

            </div>
          </section>
        </section>



        <section className="table-products">
          <div className="container">

            <div className="column">
              <h1>Top Sells</h1>

              <div className="line">
                <span></span>
              </div>



              <div className="tableCards-wrapper">

                {
                  featured_products.map((item, index) => {
                    return (
                      <Horizontalproduct item={item} key={index} />

                    )

                  })

                }



              </div>

            </div>

            <div className="column">
              <h1>Top Sells</h1>

              <div className="line">
                <span></span>
              </div>



              <div className="tableCards-wrapper">

                {
                  featured_products.map((item, index) => {
                    return (
                      <Horizontalproduct item={item} key={index} />

                    )

                  })

                }



              </div>

            </div>


            <div className="column">
              <h1>Top Sells</h1>

              <div className="line">
                <span></span>
              </div>



              <div className="tableCards-wrapper">

                {
                  featured_products.map((item, index) => {
                    return (
                      <Horizontalproduct item={item} key={index} />

                    )

                  })

                }



              </div>

            </div>


            <div className="column">
              <h1>Top Sells</h1>

              <div className="line">
                <span></span>
              </div>



              <div className="tableCards-wrapper">

                {
                  featured_products.map((item, index) => {
                    return (
                      <Horizontalproduct item={item} key={index} />

                    )

                  })

                }



              </div>

            </div>



          </div>
        </section>

      </section>

      <Footer />

    </div>

  )
}

export default HomePages