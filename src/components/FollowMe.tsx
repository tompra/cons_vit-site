const FollowMe: React.FC = () => {
    return (
        <div className='col-6 d-flex flex-column justify-content-center align-items-center h-100'>
            <h3 className='fs-3 text-center mb-3'>Follow Me</h3>
            <div className='d-flex justify-content-center'>
                <div
                    className='rounded-circle bg-success text-center mx-2'
                    style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Icon
                </div>
                <div
                    className='rounded-circle bg-success text-center mx-2'
                    style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Icon
                </div>
                <div
                    className='rounded-circle bg-success text-center mx-2'
                    style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Icon
                </div>
            </div>
        </div>
    );
};
export default FollowMe;
