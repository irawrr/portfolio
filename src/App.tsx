import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Импорт страниц
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

// Импорт компонентов
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            {/* Навигация */}
            <Header />

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>


            {/* Подвал */}
            <Footer />
        </Router>
    );
}

export default App;
