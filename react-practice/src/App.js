import About from './About'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Missing from './Missing'
import Nav from './Nav'
import Newpost from './Newpost'
import Postpage from './Postpage'
import Post from './Post'
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/newpost">Newpost</Link></li>
          <li><Link to="/postpage">Postpage</Link></li>
        </ul>
      </nav>

    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/newpost' element= {<Newpost/>}/>
      <Route path='/postpage' element= {<Postpage/>}/>
      <Route path='/postpage/:id' element= {<Post/>}/>
    </Routes>

      {/* <Header />
      <Nav />
      <Home />
      <Newpost />
      <Postpage />
      <About />
      <Missing />
      <Footer /> */}

    </div>
  );
}

export default App;
