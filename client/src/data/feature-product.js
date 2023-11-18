import image1 from '../assets/img/picture/products/feautures/image1.svg'
import image2 from '../assets/img/picture/products/feautures/image2.svg'
import image3 from '../assets/img/picture/products/feautures/image3.svg'
import image4 from '../assets/img/picture/products/feautures/image4.svg'
import image5 from '../assets/img/picture/products/feautures/image5.svg'


export const featured_products = [
    {
        id: 1,
        status: 'top-seller',
        img: image1,
        title: "Redish 500g",
        raitingBy5: 4,
        seller: "Mr Fooder",
        hasDiscount: true,
        beforePrice: 12.99,
        currentPrice: 15,
    },
    {
        id: 2,
        status: 'top-Rated',
        img: image2,
        title: "Potatos 1kg",
        raitingBy5: 3,
        seller: "Mr Fooder ",
        hasDiscount: false,
        beforePrice: 7.99,
        currentPrice: 9,
    },

    {
        id: 3,
        status: 'Trending Items',
        img: image3,
        title: "Green Beans 250g",
        raitingBy5: 2,
        seller: "Mr Fooder",
        hasDiscount: false,
        beforePrice: 6,
        currentPrice: 8.45,
    },
    {
        id: 4,
        status: 'Recently Added',
        img: image4,
        title: "Tomatos 200g",
        raitingBy5: 3,
        seller: "Mr Fooder",
        hasDiscount: false,
        beforePrice: 0,
        currentPrice: 8.45,
    },
    {
        id: 5,
        img: image5,
        title: "Broccoli 1kg",
        raitingBy5: 5,
        seller: "Mr Fooder",
        hasDiscount: false,
        beforePrice: 0,
        currentPrice: 8.45,
    },


]