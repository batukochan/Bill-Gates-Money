import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
    </div>
  );
}

export default App;