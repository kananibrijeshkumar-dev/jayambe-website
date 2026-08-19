import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import GalleryPage from './pages/GalleryPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ContactPage from './pages/ContactPage';
import EnquiryPage from './pages/EnquiryPage';
import AdminPage from './pages/AdminPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:slug" element={<ProductDetailPage />} />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
                <Route path="/applications" element={<ApplicationsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/enquiry" element={<EnquiryPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
