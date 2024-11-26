import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PresentationLayout from './layouts/PresentationLayout';
import Home from './pages/Home';
import ProjectsLayout from './layouts/ProjectsLayout';
import CVLayout from './layouts/CVLayout';
import ContactLayout from './layouts/ContactLayout';

const App: React.FC = () => {
  return (
    // @ts-ignore
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="presentation" element={<PresentationLayout />} />
          <Route path="projects" element={<ProjectsLayout />} />
          <Route path="cv" element={<CVLayout />} />
          <Route path="contact" element={<ContactLayout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
