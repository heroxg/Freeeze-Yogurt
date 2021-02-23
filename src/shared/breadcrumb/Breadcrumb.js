import React, { Component } from 'react'

import './Breadcrumb.css'

class Breadcrumb extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="breadcrumb-box">
					<h1>{this.props.breadcrumbTitle}</h1>
			    </div>
            </div>
        )
    }
}
export default Breadcrumb