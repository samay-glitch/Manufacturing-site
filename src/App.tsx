import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Suspense, lazy } from 'react';

// Components
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import CustomCursor from './components/shared/CustomCursor';
import PageLoader from './components/shared/PageLoader';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <ReactLenis root>
      <Router>
        <CustomCursor />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here if needed, but the prompt implies mostly single page sections */}
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
