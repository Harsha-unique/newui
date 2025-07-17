// import './App.css';
// import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, useLocation } from 'react-router-dom';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Navbar from './Homepage/Navbar/Navbar';
// import Home from './Homepage/Home/Home';
// import About from './Homepage/About/About';
// import Stats from './Homepage/Stats/Stats';
// import Services from './Homepage/Services/Services';
// import Cert from './Homepage/Cert/Cert';
// import Solutions from './Homepage/Solutions/Solutions';
// import Contact from './Homepage/Contact/Contact';
// import Address from './Homepage/Address/Address';
// import Footer from './Homepage/Footer/Footer';
// import Testimonials from './Homepage/Testimonials/Testimonials';
// import Products from './Homepage/products/Products';
// import EnterpriseSoftware from './Homepage/Solutions/Enterprise';
// import Technology from './Homepage/Solutions/Technology';
// import Development from './Homepage/Solutions/Development';
// import Security from './Homepage/Solutions/Security';
// import DataScience from './Homepage/Solutions/Datascience';
// import Ourproducts from './Homepage/Solutions/Ourproducts';
// import Technologys from './Homepage/Services/Technologys';
// import Engineering from './Homepage/Services/Engineering';
// import Consulting from './Homepage/Services/Consulting';
// import Cloud from './Homepage/Services/Cloud';
// import Automation from './Homepage/Services/Automation';
// import BarChart from './Homepage/Bargraph/Bargraph';
// function ScrollHandler({ setPage }: { setPage: (page: string) => void }) {
//   const location = useLocation();

//   useEffect(() => {
//     const hash = location.hash.toLowerCase();

//     // Determine page
//     const pageFromHash = () => {
//       if (hash === '#enterprise') return 'enterprise';
//       if (hash === '#solutions') return 'solutions';
//       if (hash === '#technology') return 'technology';
//       if (hash === '#development') return 'development';
//       if (hash === '#security') return 'security';
//       if (hash === '#datascience') return 'datascience';
//       if (hash === '#esgsolutions') return 'esgsolutions';
//       if (hash === '#engineering') return 'engineering';
//       if (hash === '#consulting') return 'consulting';
//       if (hash === '#cloud') return 'cloud';
//       if (hash === '#technologys') return 'technologys';

//       if (hash === '#automation') return 'automation';
//       if (hash === '#services') return 'services';
//       if (hash === '#ourproducts') return 'ourproducts';

//       return 'home';
//     };

//     setPage(pageFromHash());

//     // Scroll to anchor
//     if (hash) {
//       const id = hash.replace('#', '');
//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (el) el.scrollIntoView({ behavior: 'smooth' });
//       }, 0);
//     }
//   }, [location, setPage]);

//   return null;
// }

// function AppContent() {
//   const [page, setPage] = useState('home');

//   useEffect(() => {
//     AOS.init({
//          duration: 500,
//          offset: 120,
//          easing: 'ease-in-out',
//          once: true,
//        });
//   }, []);

//   return (
//     <>
//       <ScrollHandler setPage={setPage} />
//       <Navbar />
//       <main className="main">
//         {page === 'home' && (
//           <>
//             <Home />
//             <About />
//             <Stats />
//             {/* <Services /> */}
//             <BarChart />
//             <Cert />
//             {/* <Products /> */}
//             {/* <Solutions /> */}
//             <Testimonials />
//             <Contact />
//             <Address />
//             <Footer />
//           </>
//         )}

//         {/* {page === 'solutions' && <Solutions />} */}
//         {page === 'enterprise' && <EnterpriseSoftware />}
//         {page === 'technology' && <Technology />}
//         {page === "technologys" && <Technologys />}
//         {page === 'development' && <Development />}
//         {page === 'security' && <Security />}
//         {page === 'datascience' && <DataScience />}
//         {/* {page === 'services' && <Services />} */}
//         {page === 'engineering' && <Engineering />}
//         {page === 'consulting' && <Consulting />}
//         {page === 'cloud' && <Cloud />}
//         {page === 'automation' && <Automation />}
//         {page === 'ourproducts' && <Ourproducts />}
//       </main>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './Homepage/Navbar/Navbar';
import Home from './Homepage/Home/Home';
import About from './Homepage/About/About';
import Stats from './Homepage/Stats/Stats';

import Cert from './Homepage/Cert/Cert';

import Contact from './Homepage/Contact/Contact';
import Address from './Homepage/Address/Address';
import Footer from './Homepage/Footer/Footer';
import Testimonials from './Homepage/Testimonials/Testimonials';

import EnterpriseSoftware from './Homepage/Solutions/Enterprise';
import Technology from './Homepage/Solutions/Technology';
import Development from './Homepage/Solutions/Development';
import Security from './Homepage/Solutions/Security';
import DataScience from './Homepage/Solutions/Datascience';
import Ourproducts from './Homepage/Solutions/Ourproducts';
import Technologys from './Homepage/Services/Technologys';
import Engineering from './Homepage/Services/Engineering';
import Consulting from './Homepage/Services/Consulting';
import Cloud from './Homepage/Services/Cloud';
import Automation from './Homepage/Services/Automation';
import BarChart from './Homepage/Bargraph/Bargraph';

// ScrollHandler component
function ScrollHandler({ setPage }: { setPage: (page: string) => void }) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.toLowerCase();

    // Determine page based on hash
    const pageFromHash = () => {
      if (hash === '#enterprise') return 'enterprise';
      if (hash === '#solutions') return 'solutions';
      if (hash === '#technology') return 'technology';
      if (hash === '#development') return 'development';
      if (hash === '#security') return 'security';
      if (hash === '#datascience') return 'datascience';
      if (hash === '#esgsolutions') return 'esgsolutions';
      if (hash === '#engineering') return 'engineering';
      if (hash === '#consulting') return 'consulting';
      if (hash === '#cloud') return 'cloud';
      if (hash === '#technologys') return 'technologys';
      if (hash === '#automation') return 'automation';
      if (hash === '#services') return 'services';
      if (hash === '#ourproducts') return 'ourproducts';
      return 'home';
    };

    setPage(pageFromHash());

    // Scroll to the target element
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location, setPage]);

  return null;
}

// Main content component
function AppContent() {
  const [page, setPage] = useState('home');

  // AOS initial setup
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 120,
      easing: 'ease-in-out',
      once: false,   // run every time it scrolls into view
      mirror: true,  // run again on scroll up
    });
  }, []);

  // Refresh AOS on hash change
  useEffect(() => {
    const handleHashChange = () => {
      AOS.refresh();
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [page]);

  return (
    <>
      <ScrollHandler setPage={setPage} />
      <Navbar />
      <main className="main">
        {page === 'home' && (
          <>
            <Home />
            <About />
            <Stats />
            <BarChart />
            <Cert />
            <Testimonials />
            <Contact />
            <Address />
            <Footer />
          </>
        )}
        {page === 'enterprise' && <EnterpriseSoftware />}
        {page === 'technology' && <Technology />}
        {page === 'technologys' && <Technologys />}
        {page === 'development' && <Development />}
        {page === 'security' && <Security />}
        {page === 'datascience' && <DataScience />}
        {page === 'engineering' && <Engineering />}
        {page === 'consulting' && <Consulting />}
        {page === 'cloud' && <Cloud />}
        {page === 'automation' && <Automation />}
        {page === 'ourproducts' && <Ourproducts />}
      </main>
    </>
  );
}

// App with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
