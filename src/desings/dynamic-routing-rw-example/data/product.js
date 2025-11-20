import shoe from '../images/shoe1.jpg'
import shoe1 from '../images/shoe1.jpg'
import shoe2 from '../images/shoe2.jpg'
import shoe3 from '../images/shoe3.jpg'

import heel from '../images/heel1.jpg'
import heel1 from '../images/heel1.jpg'
import heel2 from '../images/heel2.jpg'
import heel3 from '../images/heel3.jpg'



export const products = [
    {

        id: 1,
        image:shoe,
        title:"Men's shoe DN 23x, New products",
        category:"LIFESTYLE",
        price:2345,
        oldprice:5000,
        rating:5,
        offer:23,
        description:"this is high quality men's shoe prefect for every day use.",
        gallery:[shoe1,shoe2,shoe3]


    },
    {
        id:5,
        image:heel,
        title:"women's heel DN 23x, New products",
        category:"LIFESTYLE",
        price:2445,
        oldprice:5020,
        rating:4,
        offer:25,
        description:"stylish women's shoe designed for comfort and durability.",
        gallery:[heel1, heel2,heel3]


    }
]