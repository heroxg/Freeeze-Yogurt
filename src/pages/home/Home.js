import React, { Component } from 'react'
import Banner from './../../components/banner/Banner'
import ProductBrief from '../../components/HomeMain/ProductBrief'
import  Indentity from '../../components/companyBrand/companyIdentity/Indentity'

class Home extends Component {
    render() {
        return (
            <div id="body" class="home">
                <Banner />
                <ProductBrief />
                <Indentity />
            </div>
        )
    }
}
export default Home