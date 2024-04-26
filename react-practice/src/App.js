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
import { useState } from 'react'


function App() {

  const [post, setPost] = useState([
    {
      id : 1,
      title : "My first post",
      datetime : "Jule 01, 2021 11:17:36 AM",
      body : "Made a video about Tesla Q1 results"
    },
    {
      id : 2,
      title : "My 2nd post",
      datetime : "Jule 01, 2021 11:17:36 AM",
      body : "Went to Panan on Weekends"
    },
    {
      id : 3,
      title : "My 3rd post",
      datetime : "Jule 01, 2021 11:17:36 AM",
      body : "Won an Oscar for Best actor of the year"
    },
    {
      id : 4,
      title : "My 4th post",
      datetime : "Jule 01, 2021 11:17:36 AM",
      body : "I dont know what to write bruh"
    }
  ])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  
  
  return (
      <div className="App">

      <Header header = "THE WEBSITE"/>
      <Nav search={search} setSearch={setSearch}/>
      <Home />
      <Newpost />
      <Postpage />
      <About />
      <Missing />
      <Footer />

    </div>
  );
}

export default App;
