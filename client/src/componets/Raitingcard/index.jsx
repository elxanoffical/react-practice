import React from 'react'
import './style.scss'
import yellowstar from '../../assets/img/icon/star_yellow.svg'
import graystar from '../../assets/img/icon/star_gray.svg'
import turp from '../../assets/img/picture/products/turp.svg'



const Raitingcard = () => {
    return (
        <div className='Raitingcard'>
            <div className="img-wrapper">
                <img src={turp} alt="" />
            </div>

            
            <span className="categroy">Vegetables</span>
            <h1>Redish 500g</h1>
            <div className="Raiting-stars">
                <img src={yellowstar} alt="" />
                <img src={yellowstar} alt="" />
                <img src={yellowstar} alt="" />
                <img src={graystar} alt="" />
                <img src={graystar} alt="" />
            </div>
            <div className="soldyBY">
                by
                <p><span>Mr.food</span></p>
            </div>
            <div className="purchase-wrapper">
                <p>
                    <span>$2</span>
                    $3.99
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