import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/products/edit/:id' element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
