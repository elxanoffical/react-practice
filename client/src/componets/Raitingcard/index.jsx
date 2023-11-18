import React from 'react'
import './style.scss'
import yellowstar from '../../assets/img/icon/star_yellow.svg'
import graystar from '../../assets/img/icon/star_gray.svg'



const Raitingcard = ({ item }) => {
    return (
        <div className='Raitingcard'>
            <div className="img-wrapper">
                <img src={item.img} alt="" />
            </div>


            <span className="categroy">{item.category}</span>
            <h1>{item.title}</h1>
            <div className="Raiting-stars">
                {[...Array(item.raitingBy5)].map((x, index) => (
                    <img key={index} src={yellowstar} alt="" />
                ))}

                {[...Array(5 - item.raitingBy5)].map((x, index) => (
                    <img key={index + item.raitingBy5} src={graystar} alt="" />
                ))}
            </div>
            <div className="soldyBY">
                by
                <p><span>Mr.food</span></p>
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
                <button>
                    <img src="" alt="" />
                    Add
                </button>
            </div>
        </div>
    )
}

export default Raitingcard