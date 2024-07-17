import React from 'react'
import Joker from '../assets/images/trending/joker.jpg'
import Dune from '../assets/images/trending/dune.jpg'
import Morbius from '../assets/images/trending/morbius.jpg'
import Infinite from '../assets/images/trending/infinite.jpg'
import Lightyear from '../assets/images/trending/lightyear.jpg'
import Everything from '../assets/images/trending/everything.jpg'

const Trending = () => {
    return (
        <div className='container-fluid trending' id='trending'>
            <div className='container p-3 text-light'>
                <h3>Trending</h3>

                <div className='row mt-3'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Joker} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>JOKER</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                            </div>
                        </div>
                    </div>

                
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Dune} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>DUNE</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                         </div>

                       
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Morbius} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>MORBIUS</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                    </div>
                        
                    <div className="row mt-3">
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Infinite} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>INFINITE</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                            </div>
                        

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card' style={{ width: "18rem" }}>
                                    <img src={Lightyear} className="card-img-top" alt="..." />
                                    <div className='card-body'>
                                        <h5 className='card-title'>LIGHTYEAR</h5>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                        <a href="#" class="btn btn-primary">Go Somewhere</a>
                                    </div>
                                </div>
                            </div>
                        
                       
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card' style={{ width: "18rem" }}>
                                    <img src={Everything} className="card-img-top" alt="..." />
                                    <div className='card-body'>
                                        <h5 className='card-title'>EVERYTHING</h5>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                        <a href="#" class="btn btn-primary">Go Somewhere</a>
                                    </div>
                                </div>
                            </div>
                      
                            </div>
                        </div>
                    </div>
                </div>
            )
}

            export default Trending
