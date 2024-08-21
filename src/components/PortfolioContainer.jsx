import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer'
import Header from './Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Add a comment describing the functionality of this method
  // using the currentPage we use the if statement to return different components based on whatever currentPage is
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="Main">
      <Header></Header>
      {/* the current state of what page we are on, then handlePageChange, function to change the page. */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* using the render page function inside the main to display what page we are on */}
      <main className="mx-3">{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}
