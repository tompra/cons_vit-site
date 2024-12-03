import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ModalProvider } from './context/context';
import Modal from './components/ModalCall';

const App = () => {
    return (
        <ModalProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </MainLayout>
                <Modal />
            </Router>
        </ModalProvider>
    );
};
export default App;
