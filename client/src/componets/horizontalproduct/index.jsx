import React from 'react'
import './style.scss'
import yellowstar from '../../assets/img/icon/star_yellow.svg'
import graystar from '../../assets/img/icon/star_gray.svg'


const Horizontalproduct = ({item}) => {
    return (
        <div className='horizontal-product'>
           <div className="img-wrap">
           <img src={item.img} alt="" />
           </div>


            <div className="txt-wrapper">
                <h2>Orange 1kg</h2>


                <div className="Raiting-stars">
                    {[...Array(item.raitingBy5)].map((x, index) => (
                        <img key={index} src={yellowstar} alt="" />
                    ))}

                    {[...Array(5 - item.raitingBy5)].map((x, index) => (
                        <img key={index + item.raitingBy5} src={graystar} alt="" />
                    ))}
                </div>

                <div className="purchase-wrapper">
                    <p>
                        <span id='currentprice'>${item.currentPrice}</span>
                        {
                            item.hasDiscount && (
                                <span id="discountLine">
                                    ${item.beforePrice}
                                </span>
                            )
                        }
                    </p>
                    
                </div>
            </div>




        </div>
    )
}

export default Horizontalproduct