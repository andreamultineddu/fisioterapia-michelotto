import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import MassoterapiaPage from './pages/Massoterapia';
import PancafitPage from './pages/Pancafit';
import PrivacyPage from './pages/Privacy';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<ScrollToTop />
			<div className="min-h-screen bg-cream flex flex-col justify-between">
				<div className="w-full flex flex-col items-center">
					<Navbar />
					<main className="w-full bg-cream">
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/massoterapia" element={<MassoterapiaPage />} />
							<Route path="/pancafit" element={<PancafitPage />} />
							<Route path="/privacy" element={<PrivacyPage />} />
							<Route path="*" element={<Navigate to="/" replace />} />
						</Routes>
					</main>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

// RedirectToHome removed: using React Router `Navigate` and `basename` instead

export default App;
