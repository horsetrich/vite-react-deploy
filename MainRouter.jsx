import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/About'
import Contact from './src/Contact'
import Education from './src/education'
import Project from './src/Project'
import Layout from './components/Layout'
import Services from './src/Services'

const MainRouter = () => {
    return (
        <div >
            <Layout/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/Project" element={<Project/>} />
                <Route exact path="/Services" element={<Services />} />
            </Routes>
        </div>
    );
};

export default MainRouter