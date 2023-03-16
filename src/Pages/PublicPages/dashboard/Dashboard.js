import React from 'react'
import img1 from "../../../assets/images/slide1.png"
import img2 from "../../../assets/images/slide2.png"
import img3 from "../../../assets/images/slide3.png"
import Carousel from '../../../customComponents/carousel/Carousel'

export default function Dashboard() {
    return (
        <div className='p-3'>
            <Carousel img1={img1} img2={img2} img3={img3} />
        </div>
    )
}
