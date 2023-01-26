import React from "react";
import "./App.css";
import Home from './components/Main/Home';
import AdminServices from "./components/admin/Admin_Services";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ServicesList from './components/Main/ServicesList';
import Gallery from './components/Main/Gallery';

import CartList from './components/Main/CartList';

import About from './components/Main/About';

import Service from './components/admin/Service';
import Main from './components/admin/Main';
import GalleryItem from './components/admin/GalleryItem';
import GalleryItems from './components/admin/GalleryItems';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<ServicesList/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<h1>Contact Component</h1>}/>
        <Route path="/admin" element={<Main/>}/>
        <Route path="/admin/services" element={<AdminServices/>}/>
        <Route path="/admin/service/:id" element={<Service/>}/>
        <Route path="/admin/gallery" element={<GalleryItems/>}/>
        <Route path="/admin/gallery/:id" element={<GalleryItem/>}/>
        <Route path="/cart" element={<CartList/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;