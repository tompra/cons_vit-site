import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const location = useLocation();
    const page = location.pathname.replace('/', '');

    const toggleNavbar = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };
    console.log(page);

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='container-fluid'>
                    <Link className='navbar-brand text-light' to='/home'>
                        VGConsulting
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        onClick={toggleNavbar}
                        aria-controls='navbarSupportedContent'
                        aria-expanded={!isNavCollapsed ? 'true' : 'false'}
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${
                            isNavCollapsed ? 'collapse' : 'show'
                        }`}
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 text-light'>
                            <li className='nav-item'>
                                <Link
                                    className={`nav-link text-light ${isActive(
                                        '/home'
                                    )}`}
                                    to='/home'
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={`nav-link text-light ${isActive(
                                        '/about'
                                    )}`}
                                    to='/about'
                                >
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={`nav-link text-light ${isActive(
                                        '/contact'
                                    )}`}
                                    to='/contact'
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={`nav-link text-light ${isActive(
                                        '/services'
                                    )}`}
                                    to='/services'
                                >
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
