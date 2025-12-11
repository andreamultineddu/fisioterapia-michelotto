import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MassoterapiaPage from './pages/Massoterapia';
import PancafitPage from './pages/Pancafit';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
                <div className="w-full flex flex-col items-center">
                    <Navbar />
                    <main className="w-full">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/massoterapia"
                                element={<MassoterapiaPage />}
                            />
                            <Route
                                path="/pancafit"
                                element={<PancafitPage />}
                            />
                            <Route path="*" element={<RedirectToHome />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

function RedirectToHome() {
    window.location.href = '/fisioterapia-michelotto/';
    return null;
}

export default App;
