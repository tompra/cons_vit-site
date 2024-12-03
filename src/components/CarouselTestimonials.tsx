import { testimonials } from '../utils/testimonial';

const CarouselTestimonial: React.FC = () => {
    return (
        <div
            id='carouselExampleControls'
            className='carousel slide'
            data-bs-ride='carousel'
        >
            <div className='carousel-inner'>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${
                            index === 0 ? 'active' : ''
                        }`}
                    >
                        <div className='text-center p-5'>
                            <img
                                src={testimonial.image}
                                className='d-block mx-auto rounded-circle'
                                alt='testimonial'
                                style={{ width: '150px', height: '150px' }}
                            />
                            <p className='mt-3 fs-4'>"{testimonial.text}"</p>
                            <p className='fw-bold'>{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleControls'
                data-bs-slide='prev'
            >
                <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleControls'
                data-bs-slide='next'
            >
                <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    );
};

export default CarouselTestimonial;
