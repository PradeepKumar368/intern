import './testimonial.css'; // Link the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
        <div className="container-lg">
            <div className="row">
                <h2 className='mt-4'>Our Student <b>Testimonials</b></h2>
                <div className="col-sm-12">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* <!-- Carousel indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for carousel items --> */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="testimonial">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                                        </div>
                                        <div className="media">
                                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3" className="mr-3" alt="" />
                                            <div className="media-body">
                                                <div className="overview">
                                                    <div className="name"><b>Paula Wilson</b></div>
                                                    <div className="details">Media Analyst / SkyNet</div>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            {[...Array(4)].map((star, index) => (
                                                                <li key={index} className="list-inline-item"><FontAwesomeIcon icon={faStar} style={{ color: '#ffdc12' }} /></li>
                                                            ))}
                                                            <li className="list-inline-item"><FontAwesomeIcon icon={faStar} style={{ color: '#ffdc12' }} /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="testimonial">
                                            <p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
                                        </div>
                                        <div className="media">
                                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3" className="mr-3" alt="" />
                                            <div className="media-body">
                                                <div className="overview">
                                                    <div className="name"><b>Antonio Moreno</b></div>
                                                    <div className="details">Web Developer / SoftBee</div>
                                                    <div className="star-rating">
                                                        <ul className="list-inline">
                                                            {[...Array(4)].map((star, index) => (
                                                                <li key={index} className="list-inline-item"><FontAwesomeIcon icon={faStar} style={{ color: '#ffdc12' }} /></li>
                                                            ))}
                                                            <li className="list-inline-item"><FontAwesomeIcon icon={faStar} style={{ color: '#ffdc12' }} /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add more carousel items here */}
                        </div>
                        {/* <!-- Carousel controls --> */}
                        <div>
                            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black' }} />
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                <FontAwesomeIcon icon={faChevronRight} style={{ color: 'black' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
