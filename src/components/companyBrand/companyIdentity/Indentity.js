import React, { Component } from 'react'
import IndentityData from '../../companyBrand/companyIdentity/IndentityData'
import IndentityList from '../companyIdentity/IndentityList'

import './indentify.css'


class Indentity extends Component {
    render() {
        return (
            <div class="company-stands">
                <div class="col-sm-8 mx-auto">
                   <div class="row">
                        {IndentityList.map(listIdentifier => (
                            <IndentityData 
                                key={listIdentifier.id} 
                                title={listIdentifier.name}
                                image={listIdentifier.imgUrl}
                                link= {listIdentifier.link}
                        />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Indentity