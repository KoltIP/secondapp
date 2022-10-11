import React  from 'react';
import {Route, Routes} from 'react-router-dom'
import {ProductPage} from './pages/ProductsPage.tsx'
import {AboutPage} from './pages/AboutPage.tsx'
import { Navigation } from './components/Navigation.tsx';

function App() {
  return(
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  ) 
}
export default App;
