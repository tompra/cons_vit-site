import Button from './Button';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='container-fluid bg-danger text-light py-2'>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-2 col-md-6'>
                    <section>
                        <p className='fs-5'>Services</p>
                        <nav>
                            <ul className='list-unstyled'>
                                <Link to='/services'>
                                    <li className='text-light'>
                                        One-on-one Coaching
                                    </li>
                                </Link>
                                <Link to='/services'>
                                    <li className='text-light'>
                                        Group Coaching
                                    </li>
                                </Link>
                                <Link to='/services'>
                                    <li className='text-light'>
                                        Workshop Facilitation
                                    </li>
                                </Link>
                                <Link to='/services'>
                                    <li className='text-light'>
                                        Keynotes &amp; Seminars
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </section>
                </div>
                <div className='col-lg-2 col-md-6'>
                    <section id='nav_menu-4'>
                        <p className='fs-5'>Quick Links</p>
                        <nav>
                            <ul className='list-unstyled'>
                                <Link to='/home'>
                                    <li className='text-light text-decoration-none'>
                                        Home
                                    </li>
                                </Link>
                                <Link to='/about'>
                                    <li className='text-light'>About</li>
                                </Link>
                                <Link to='/services'>
                                    <li className='text-light'>Services</li>
                                </Link>
                                <Link to='/contact'>
                                    <li className='text-light'>Contact</li>
                                </Link>
                            </ul>
                        </nav>
                    </section>
                </div>
                <div className='col-lg-2 col-md-6'>
                    <div className='footer-widget-area'>
                        <p className='fs-5'>Contact Info</p>
                        <div>
                            <p>123 Schnellstraße 123, Berlin 10302. Germany</p>
                            <p>mail@mail.com</p>
                            <p>+49 1234356789</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6'>
                    <div className='d-flex justify-content-center mt-5'>
                        <Button text='Book a call' />
                    </div>
                </div>
            </div>
            <p className='text-center my-3'>
                &copy; {currentYear} VGConsulting. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
