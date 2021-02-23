import React, { Component } from 'react'
import Yogurt from '../../assets/images/yogurt.jpg'

import './ProductBrief.css'

class ProductBrief extends Component {
    render() {
        return (
			<div class="product-brief">
				<div class="container">
					<div class="row">
						<div class="col-sm-8">
							<h1>NEW PRODUCT</h1>
							<h2>The Twist of Healthy Yogurt</h2>
							<p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
						</div>
						<div class="col-sm-4">
							<img src={Yogurt} alt="" />
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default ProductBrief