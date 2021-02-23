import React, { Component } from 'react'
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb'
import ProductItem from './ProductItem'

import './product.css'

class Product extends Component {
    render() {
        const breadcrumbTitle = "product"
        return (
            <div>
                <Breadcrumb breadcrumbTitle = {breadcrumbTitle} />
                <div class="product-wrap">
                    <div class="container">
                        <ProductItem />
                    </div>
                </div>
            </div>
        )
    }
}
export default Product