import './App.css'
import ContainHeader from './components/ContainHeader';
import NavigationBar from './components/NavigationBar'; 
import SewaRental from './components/SewaRental';

function App() {
  return (
      <div className='background'>
      <NavigationBar />
      <SewaRental/>
      <ContainHeader />
      </div>
  );
}

export default App;
