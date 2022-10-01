import './App.css'
import ContainHeader from './components/ContainHeader';
import Faq from './components/Faq';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar'; 
import Testimonial from './components/Testimonial';
import WhyUs from './components/WhyUs';


function App() {
  return (
      <div className='background'>
      <NavigationBar />
      <ContainHeader />
      <WhyUs />
      <Testimonial />
      <Faq />
      <Footer />
      </div>
  );
}

export default App;
