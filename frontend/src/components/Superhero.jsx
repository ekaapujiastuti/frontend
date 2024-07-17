import React from 'react'
import Antman from '../assets/images/superhero/antman.jpg'
import Avenger from'../assets/images/superhero/avenger.jpg'
import Batman from'../assets/images/superhero/batman.jpg'
import Robinhood from'../assets/images/superhero/robinhood.jpg'
import Spiderman from'../assets/images/superhero/spiderman-cover.jpg'
import Superman from'../assets/images/superhero/superman.jpg'

const Superhero = () => {
    return (
    <div>
       <div className='container-fluid superhero' id='superhero'>
            <div className='container p-3 text-light'>
                <h3>Superhero</h3>

                <div className='row mt-3'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Antman} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>ANTMAN</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                            </div>
                        </div>
                    </div>

                
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Avenger} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>AVENGER</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                         </div>

                       
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Batman} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>BATMAN</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                    </div>
                        
                    <div className="row mt-3">
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card' style={{ width: "18rem" }}>
                            <img src={Robinhood} className="card-img-top" alt="..." />
                            <div className='card-body'>
                                <h5 className='card-title'>ROBINHOOD</h5>
                                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                            </div>
                        

                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card' style={{ width: "18rem" }}>
                                    <img src={Spiderman} className="card-img-top" alt="..." />
                                    <div className='card-body'>
                                        <h5 className='card-title'>SPIDERMAN</h5>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                        <a href="#" class="btn btn-primary">Go Somewhere</a>
                                    </div>
                                </div>
                            </div>
                        
                       
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='card' style={{ width: "18rem" }}>
                                    <img src={Superman} className="card-img-top" alt="..." />
                                    <div className='card-body'>
                                        <h5 className='card-title'>SUPERMAN</h5>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ducimus.</p>
                                        <a href="#" class="btn btn-primary">Go Somewhere</a>
                                    </div>
                                </div>
                            </div>
                      
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Superhero