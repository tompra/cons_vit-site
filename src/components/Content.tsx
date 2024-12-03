import { useLocation } from 'react-router-dom';
import Cards from './Cards';
import WhyChoose from './WhyChoose';
import Greeting from './Greeting';
import Testimonials from './Testimonials';
import BookCall from './BookCall';
import OverviewServices from './OverviewServices';
import AboutMe from './AboutMe';
import Certifications from './Certifications';
import ContactMe from './ContactMe';
import ContactForm from './ContactForm';
import InfoServices from './InfoServices';
import CarouselTestimonial from './CarouselTestimonials';
import MainServices from './MainServices';

const Content: React.FC = () => {
    const location = useLocation();
    const page = location.pathname.replace('/', '');
    return (
        <div>
            {page === 'home' && (
                <div className='container bg-dark text-light'>
                    <Greeting />
                    <Cards />
                    <WhyChoose />
                    <Testimonials />
                    <OverviewServices />
                    <BookCall />
                </div>
            )}
            {page === 'about' && (
                <div className='container bg-success'>
                    <AboutMe />
                    <Certifications />
                    <Cards />
                    <BookCall />
                </div>
            )}
            {page === 'contact' && (
                <div className='container bg-warning'>
                    <ContactMe />
                    <ContactForm />
                </div>
            )}
            {page === 'services' && (
                <div className='container bg-info'>
                    <InfoServices />
                    <CarouselTestimonial />
                    <MainServices />
                    <Cards />
                </div>
            )}
        </div>
    );
};
export default Content;
