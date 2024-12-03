import Header from './Header';
import Footer from './Footer';
import { MainLayoutProps } from '../utils/props';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <main className='flex-grow-1'>{children}</main>
            <Footer />
        </div>
    );
};
export default MainLayout;
