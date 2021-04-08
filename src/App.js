import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Carousel from './components/Carousel'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
