import React, { Component } from 'react';
import style from './Herobanner.css'
class HeroBanner extends Component {
    render() {
        return (
            <>
            <section className='main'>
                <div className='container'>           
                    <div className='container1'>
                        <div className='banner-info'>
                            <h4>{this.props.banner_name}</h4>
                            <h1>{this.props.banner_title}</h1>
                            <p>{this.props.banner_description}</p>
                        </div>
                        <div className='banner-img'>
                            <img src={this.props.image} alt=""  className="img"/>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default HeroBanner;
