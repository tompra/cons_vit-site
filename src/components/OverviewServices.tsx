import { Link } from 'react-router-dom';

const OverviewServices: React.FC = () => {
    return (
        <div className='container bg-success py-4'>
            <div className='row'>
                <div className='col-lg-4'>
                    <p className='fs-1'>
                        What we all need to help realize, what we want the
                        most...
                    </p>
                    <p className='text-danger'>
                        Click for more information about the services
                    </p>
                </div>
                <div className='col-lg-8'>
                    <Link
                        to='/services'
                        className='d-flex justify-content-between align-items-center mb-3 text-decoration-none hover-services'
                    >
                        <p className='fs-3 mb-0 text-light'>One-on-One</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 2048 2048'
                            className='arrow-icon'
                        >
                            <path d='M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z'></path>
                        </svg>
                    </Link>

                    <Link
                        to='/services'
                        className='d-flex justify-content-between align-items-center mb-3 text-decoration-none hover-services'
                    >
                        <p className='fs-3 mb-0 text-light'>Business</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 2048 2048'
                            className='arrow-icon'
                        >
                            <path d='M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z'></path>
                        </svg>
                    </Link>

                    <Link
                        to='/services'
                        className='d-flex justify-content-between align-items-center mb-3 text-decoration-none hover-services'
                    >
                        <p className='fs-3 mb-0 text-light'>Management</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 2048 2048'
                            className='arrow-icon'
                        >
                            <path d='M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z'></path>
                        </svg>
                    </Link>

                    <Link
                        to='/services'
                        className='d-flex justify-content-between align-items-center mb-3 text-decoration-none hover-services'
                    >
                        <p className='fs-3 mb-0 text-light'>Book keeping</p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 2048 2048'
                            className='arrow-icon'
                        >
                            <path d='M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z'></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default OverviewServices;
