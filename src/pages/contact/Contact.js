import React, { Component } from 'react'
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb'

import location from './../../assets/images/check-in.png'
import './Contact.css'

export default class Contact extends Component {
    render() {
        const breadcrumbTitle = "Contact";
        return (
            <div>
                <Breadcrumb breadcrumbTitle = {breadcrumbTitle} />
                <div class="contact-add">
                    <div class="wrap-address col-sm-8 col-sm-offset-2 mx-auto">
                        <div class="row">
                            <div class="col-sm-2 add-left">
                                <img src={location} alt="" />
                            </div>
                            <div class="col-sm-10 add-right">
                                <h1>UNIT 0123 , ABC BUILDING, BUSSINESS PARK</h1>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <dv class="form-wrapper">
                    <div class="contact-form col-sm-6 col-sm-offset-3 mx-auto">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="6"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </dv>
            </div>
        )
    }
}
