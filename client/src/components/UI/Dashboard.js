import React, { Fragment } from 'react'
import './Dashboard.css';
//----IMAGES IMPORT--------
import cert1 from '../images/Cert1.png'
import cert2 from '../images/Cert2.png'
import cert3 from '../images/Cert3.png'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Fragment>



            <section className="hero-area bg-1 text-center overly animated fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-block">
                                <h1>Welcome to the Globus Certificate Generator</h1>
                                <p>
                                    Now you can create your own personalized certificates
                                    in an instant! Just select your favorite certificate design,
                                    enter your personalized text and then download your certificate as a PDF, ready for printing on your home
                                    printer. You can use Certificate Magic as many times
                                    as you like, and it’s completely FREE!
                </p>
                            </div>
                            <Link to="#templates" className="btn btn-main mb-4 button js-scroll-trigger">Get Started Now</Link>

                        </div>
                    </div>
                </div>
            </section>



            <section className="popular-deals section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title" id="templates">
                                <h2>Trending Certificate Templates</h2>
                                <p>
                                    Choose your Style or Just select your favorite certificate design,
                                    enter your personalized text and that's boom, ready for printing on your home
                                    printer
                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row animated slideInRight">
                        <div className="col-sm-12 col-lg-4">
                            <div className="product-item bg-light">
                                <div className="card">
                                    <div className="thumb-content">
                                        <Link to="/certificate/template1">
                                            <img
                                                className="card-img-top img-fluid"
                                                src={cert1}
                                                alt="Card image cap"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title"> <Link to="/certificate/template1">Simple Yellow</Link></h4>
                                        <ul className="list-inline product-meta">
                                            <li className="list-inline-item">
                                                <Link to=""
                                                ><i className="fa fa-folder-open-o"></i>Basic</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to=""><i className="fa fa-calendar"></i>26th December</Link>
                                            </li>
                                        </ul>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Explicabo, aliquam!
                    </p>
                                        <div className="product-ratings">
                                            <ul className="list-inline">
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="product-item bg-light">
                                <div className="card">
                                    <div className="thumb-content">
                                        <Link to="/certificate/template2">
                                            <img
                                                className="card-img-top img-fluid"
                                                src={cert2}
                                                alt="Card image cap"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <Link to="/certificate/template2">Royal Maroon</Link>
                                        </h4>
                                        <ul className="list-inline product-meta">
                                            <li className="list-inline-item">
                                                <Link to=""
                                                ><i className="fa fa-folder-open-o"></i>Premium</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to=""><i className="fa fa-calendar"></i>26th December</Link>
                                            </li>
                                        </ul>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Explicabo, aliquam!
                    </p>
                                        <div className="product-ratings">
                                            <ul className="list-inline">
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="product-item bg-light">
                                <div className="card">
                                    <div className="thumb-content">
                                        <Link to="/certificate/template3">
                                            <img
                                                className="card-img-top img-fluid"
                                                src={cert3}
                                                alt="Card image cap"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title"><Link to="/certificate/template3">Golden Premium</Link></h4>
                                        <ul className="list-inline product-meta">
                                            <li className="list-inline-item">
                                                <Link to=""
                                                ><i className="fa fa-folder-open-o"></i>Premium</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to=""><i className="fa fa-calendar"></i>26th December</Link>
                                            </li>
                                        </ul>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Explicabo, aliquam!
                    </p>
                                        <div className="product-ratings">
                                            <ul className="list-inline">
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item selected">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="footer section section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <small className="text-white">
                                Copyright © 2019. All Rights Reserved, a product by <span>
                                    <a href="https://www.globuslabs.com/" target="_blank" rel="noopener noreferrer" className="text-primary" >
                                        Globus Labs
                                 </a></span>
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Dashboard
