import './testimonial.css'; // Link the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
        <div className="container-lg">
            <div className="row">
                <h2 className='testimonial-heading mt-4'>Our Student <b>Testimonials</b></h2>
                <div className="col-sm-12">
                    <div id="testimonialCarousel" className="testimonial-carousel carousel slide" data-ride="carousel">
                        {/* <!-- Carousel indicators --> */}
                        <ol className="testimonial-carousel-indicators carousel-indicators">
                            <li data-target="#testimonialCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="1"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for carousel items --> */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="testimonial-content">
                                            <p>Egyanam Advance has been instrumental in helping me land my dream job. The comprehensive courses and personalized mentorship provided a solid foundation for my career growth. I'm truly grateful for the invaluable skills and knowledge gained through Egyanam.</p>
                                        </div>
                                        <div className="testimonial-media">
                                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3" className="mr-3" alt="" />
                                            <div className="testimonial-overview">
                                                <div className="name"><b>Hemang Singh</b></div>
                                                <div className="details">Consulting analyst</div>
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
                                    <div className="col-sm-6">
                                        <div className="testimonial-content">
                                            <p>Thanks to Egyanam Advance, I was able to upskill myself and transition into a more fulfilling career path. The hands-on projects and expert guidance not only boosted my confidence but also equipped me with practical skills sought after by employers. I highly recommend Egyanam to anyone looking to advance their career.</p>
                                        </div>
                                        <div className="testimonial-media">
                                            <img src="https://www.thewikifeed.com/wp-content/uploads/2021/01/gaurav-taneja-19.jpg" className="mr-3" alt="" />
                                            <div className="testimonial-overview">
                                                <div className="name"><b>Gaurav Taneja</b></div>
                                                <div className="details">Web Developer</div>
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
                            {/* Add more carousel items here */}
                        </div>
                        {/* <!-- Carousel controls --> */}
                        <div>
                            <a className="testimonial-carousel-control-prev carousel-control-prev" href="#testimonialCarousel" data-slide="prev">
                                <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black' }} />
                            </a>
                            <a className="testimonial-carousel-control-next carousel-control-next" href="#testimonialCarousel" data-slide="next">
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
