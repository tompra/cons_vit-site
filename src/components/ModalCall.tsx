import React from 'react';
import { useModal } from '../context/context';

const Modal: React.FC = () => {
    const { showModal, closeModal } = useModal();

    return (
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            style={{ display: showModal ? 'block' : 'none' }}
            tabIndex={-1}
            aria-labelledby='exampleModalLabel'
            aria-hidden={!showModal}
        >
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            Schedule a Call
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                            onClick={closeModal}
                        ></button>
                    </div>
                    <div className='modal-body p-0'>
                        <iframe
                            src='https://calendly.com/tomprayon'
                            width='100%'
                            height='100%'
                            frameBorder='0'
                            style={{
                                border: 'none',
                                display: 'block',
                                width: '100%',
                                height: '500px',
                            }}
                            title='Calendly Scheduling'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
