import React, { Component } from 'react'
import ProductData from './../../api/productData'

class ProductItem extends Component {
    render() {
        return (
            <div class="row">
                {ProductData.map(product =>(
                    <div class="col-sm-3 product-wrap" key={product.id}>
                        <img src={product.imgUrl} alt="" />
                        <p>{product.title}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductItem