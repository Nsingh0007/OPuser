import React from 'react'

import { SvgGroup } from '../assets/svg'
import img from '../assets/images/Rectangle 6.png'

export default function BgImg() {
    return (
        <div class="imgContainer">
            <img src={img} alt="background" style={{ width: '100%' }} />

            <div class="centered"><SvgGroup /></div>
        </div>
    )
}
