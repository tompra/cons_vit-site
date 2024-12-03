import ServiceCard from './ServiceCard';
const MainServices: React.FC = () => {
    return (
        <div className='row bg-light py-5'>
            <p className='fs-2 text-center'>Main Services</p>
            <div className='row d-flex justify-content-center'>
                <ServiceCard
                    number={1}
                    title='One-on-one Coaching'
                    description='Felis nulla purus pellentesque id euismod auctor fames ut tempus feugiat mi quisque eget vitae.'
                />
                <ServiceCard
                    number={2}
                    title='Business Coaching'
                    description='Felis nulla purus pellentesque id euismod auctor fames ut tempus feugiat mi quisque eget vitae.'
                />
                <ServiceCard
                    number={3}
                    title='Management Coaching'
                    description='Felis nulla purus pellentesque id euismod auctor fames ut tempus feugiat mi quisque eget vitae.'
                />
                <ServiceCard
                    number={4}
                    title='Workshops & Seminars'
                    description='Felis nulla purus pellentesque id euismod auctor fames ut tempus feugiat mi quisque eget vitae.'
                />
            </div>
        </div>
    );
};
export default MainServices;
