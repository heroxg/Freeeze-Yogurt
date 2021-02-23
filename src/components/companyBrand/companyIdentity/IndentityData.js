import React from 'react'
import { Link } from 'react-router-dom'

import './indentityData.css'

function IndentityData(props) {
    return (
            <div class="col-sm-3 brand-identity">
                <Link to={props.link}><img src={props.image} alt='' /></Link>
                <h1>{props.title}</h1>
            </div>
    )
}

export default IndentityData