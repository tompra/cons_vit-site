import { ServiceCardProps } from '../utils/props';

const ServiceCard: React.FC<ServiceCardProps> = ({
    number,
    title,
    description,
}) => {
    return (
        <div className='col-lg-3 col-md-6 mb-4'>
            <div className='service-card border border-2 border-light rounded h-100 d-flex flex-column justify-content-between  p-3'>
                <div className='service-card-number'>
                    <h6 className='fs-6'>
                        {number.toString().padStart(2, '0')}.
                    </h6>
                </div>

                <div>
                    <h3 className='fs-3'>{title}</h3>
                </div>

                <div>
                    <p>{description}</p>
                </div>

                <div className='service-card-button text-center mx-auto'>
                    <button className='btn btn-outline-light w-100'>
                        Contact Me &raquo;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
