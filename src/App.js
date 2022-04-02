import { createContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Videos from './components/Videos/Videos';
import useBlogs from './hooks/useBlogs';
export const BlogContext = createContext([])
function App() {
    const [blogs, setBlogs] = useBlogs();
    const pathname = useLocation();
    console.log();
  return (
    <>
     <BlogContext.Provider value={{blogs, setBlogs}}>
    {!pathname.pathname.includes('blog') && <Header />}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blog/:id' element={<BlogDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      </BlogContext.Provider>
    </>
  );
}

export default App;
