import React from 'react';
import './App.css';
import ResponsiveAppBar from "./components/appbar"
import ProductsList from './Products/ProductList';
import ProductForm from './Products/ProductForm'

function App() {
  return (
    <div className="App">
      <ProductsList />
      <ProductForm />
    </div>
  )
};

export default App;
