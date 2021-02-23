import React, { Component } from 'react'
import Breadcrumb from './../../shared/breadcrumb/Breadcrumb'
import breadcrumbImage from './../../assets/images/bg-header-about.jpg'


import './About.css'

class About extends Component {
    render() {
        const breadcrumbTitle = "About";
        return (
            <div class="wrapper">
                <Breadcrumb breadcrumbTitle ={breadcrumbTitle} />
                <div class="breadcrumb-img">
				    <img src={breadcrumbImage} alt="" />
			    </div>
                <div class="about-main">
                    <div class="col-sm-12 col-md-12 col-lg-8 col-lg-offset-2 mx-auto">
                        <div class="row">
                        <div class="sidebar col-sm-4">
                            <h1>Be Part of Our Community</h1>
                            <p> when an unknown printer took a galley of type and scrambled it to. when an unknown printer took a galley of type and scrambled it to  when an unknown printer took a galley of type and scrambled it to </p>
                        </div>
                        <div class="article col-sm-8">
                            <h1>We Have Free Yogurt For Everyone</h1>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            <h1>We Have More Yogurt For You</h1>
                            <p>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic <a href="#">Free Yogurt</a>. it to make a type specimen book. It has survived not only five centuries <a href="#">Free</a> it to make a type specimen book.</p>
                            <h1>Yogurt Details</h1>
                            <span>Design Version 2.</span>
                            <span>Code Version 1.</span>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text <a href="#">Frozen Yogurt Shop Website Template</a>.</p>
                            <p>Many desktop publishing packages  <a href="#">Free Yogurt</a>.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About