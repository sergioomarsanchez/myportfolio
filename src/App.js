import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/body/contact";
import Projects from "./components/body/projects";
import Skills from "./components/body/skills";
import Work from "./components/body/work";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home/index";
import Blog from "./components/body/blog/index"
import BlogPost from "./components/body/blog/blogPost";
import { ThemeContext } from "./contexts/theme";
import './App.css'

function App() {

  const [isDark] = useContext(ThemeContext)

  return (

    <div id='app' className={isDark?"App":"appLight"}>
      <Header/>
      <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:slug' element={<BlogPost/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App
