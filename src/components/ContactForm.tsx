import { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [sendCopy, setSendCopy] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ name, email, message, sendCopy });
    };

    return (
        <div className='bg-primary'>
            <div className='row'>
                <div className='col-lg-6 col-12 bg-success d-flex flex-column justify-content-start'>
                    <div className='my-4'>
                        <p className='fs-5 fw-bold'>Ready to work together?</p>
                    </div>
                    <div className='row my-3'>
                        <p className='fs-1'>
                            If You’re Ready to Step into a Bigger Picture of
                            Success, Let’s Talk.
                        </p>
                    </div>
                    <div className='row'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi doloribus facilis qui. Itaque, eaque
                            nisi quo officia vel, aliquid natus minus et aliquam
                            ducimus veniam officiis magnam dolorem accusamus
                            distinctio!
                        </p>
                    </div>
                </div>

                <div className='col-lg-6 col-12 bg-info d-flex justify-content-center align-items-center p-4'>
                    <form
                        className='w-100 form-contact bg-light rounded p-5'
                        onSubmit={handleSubmit}
                    >
                        <div className='form-outline mb-4'>
                            <input
                                type='text'
                                id='form4Example1'
                                className='form-control'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label
                                className='form-label'
                                htmlFor='form4Example1'
                            >
                                Name
                            </label>
                        </div>
                        <div className='form-outline mb-4'>
                            <input
                                type='text'
                                id='form4Example1'
                                className='form-control'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label
                                className='form-label'
                                htmlFor='form4Example1'
                            >
                                Last Name
                            </label>
                        </div>
                        <div className='form-outline mb-4'>
                            <input
                                type='email'
                                id='form4Example2'
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                                className='form-label'
                                htmlFor='form4Example2'
                            >
                                Email address
                            </label>
                        </div>
                        <div className='form-outline mb-4'>
                            <textarea
                                className='form-control'
                                id='form4Example3'
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <label
                                className='form-label'
                                htmlFor='form4Example3'
                            >
                                Message
                            </label>
                        </div>
                        <div className='form-check d-flex justify-content-center mb-4'>
                            <input
                                className='form-check-input me-2'
                                type='checkbox'
                                id='form4Example4'
                                checked={sendCopy}
                                onChange={() => setSendCopy(!sendCopy)}
                            />
                            <label
                                className='form-check-label'
                                htmlFor='form4Example4'
                            >
                                Send me a copy of this message
                            </label>
                        </div>
                        <div className='d-flex justify-content-center mb-4'>
                            <button
                                type='submit'
                                className='btn btn-primary w-25'
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
