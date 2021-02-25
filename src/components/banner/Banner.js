import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BannerPic from './../../assets/images/bg-home.jpg'
import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div className="banner-sec">
                <img src={BannerPic} alt="" />
                <div class="button-box">
                    <Link to="product.html" className="ad-btn">Freeze Delight</Link>
                </div>
            </div>
        )
    }
}

export default Banner