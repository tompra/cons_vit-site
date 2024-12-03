import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
    return (
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
        </Router>
    );
};
export default App;
