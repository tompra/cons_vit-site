import DownloadCV from './DownloadCV';
import FollowMe from './FollowMe';

const ContactMe: React.FC = () => {
    return (
        <div className='bg-warning'>
            <div className='row bg-dark py-5'>
                <p className='fs-1 text-light ms-5'>Contact Me</p>
            </div>
            <div className='row'>
                <p className='text-success fw-bold ms-5 py-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odio quia illum similique labore libero voluptas, id aliquid
                    sunt rerum eveniet voluptatem sint totam quae quisquam
                    commodi possimus fugit suscipit magni?
                </p>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-12 bg-dark text-light py-5 border-bottom border-light border-3'>
                            <div className='row'>
                                <div className='col-2 d-flex justify-content-end align-items-center'>
                                    <div
                                        className='rounded-circle bg-primary text-center'
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                        }}
                                    >
                                        Icon
                                    </div>
                                </div>
                                <div className='col-10 d-flex justify-content-center align-items-center w-75'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Qui odit atque nulla porro
                                    natus animi nemo temporibus saepe,
                                    cupiditate suscipit maxime delectus
                                    officiis, fugiat, illum itaque consequatur
                                    laudantium ratione minima!
                                </div>
                            </div>
                        </div>
                        <div className='col-12 bg-success text-light py-5 border-bottom border-light border-3'>
                            <div className='row'>
                                <div className='col-2 d-flex justify-content-end align-items-center'>
                                    <div
                                        className='rounded-circle bg-primary text-center'
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                        }}
                                    >
                                        Icon
                                    </div>
                                </div>
                                <div className='col-10 d-flex justify-content-center align-items-center w-75'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Qui odit atque nulla porro
                                    natus animi nemo temporibus saepe,
                                    cupiditate suscipit maxime delectus
                                    officiis, fugiat, illum itaque consequatur
                                    laudantium ratione minima!
                                </div>
                            </div>
                        </div>
                        <div className='col-12 bg-primary text-light py-5 border-bottom border-light border-3'>
                            <div className='row'>
                                <div className='col-2 d-flex justify-content-end align-items-center'>
                                    <div
                                        className='rounded-circle bg-success text-center'
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                        }}
                                    >
                                        Icon
                                    </div>
                                </div>
                                <div className='col-10 d-flex justify-content-center align-items-center w-75'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Qui odit atque nulla porro
                                    natus animi nemo temporibus saepe,
                                    cupiditate suscipit maxime delectus
                                    officiis, fugiat, illum itaque consequatur
                                    laudantium ratione minima!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-6 bg-info py-5'>
                    <div className='text-center'>
                        <img src='https://placehold.jp/400x400.png' alt='' />
                    </div>
                </div>
            </div>
            <div className='row bg-warning text-light border-bottom border-primary border-3 py-3'>
                <DownloadCV />
                <FollowMe />
            </div>
        </div>
    );
};

export default ContactMe;
