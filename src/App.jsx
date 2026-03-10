import './App.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

function App() {

  return (
    <div className="app-container">

      {/* Navbar Section */}
      <Navbar />

      {/* Banner Section */}
      <Banner />

      {/* Body Section */}
      <div className="body-section">
        <Container />
      </div>

       {/* Footer Section */}
      <Footer />

    </div>
  )
}

export default App
