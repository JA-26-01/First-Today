import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// export default class App extends Component {
const App = () => {
  const pageSize=9;
  const apiKey=process.env.REACT_APP_NEWS_API

  // render() {
    return (
      <div>
       <Router>
       <Navbar/>
       <Routes>
       <Route exact path="/" element={<News key="general" per_page={pageSize} category="general" apiKey={apiKey}/>}/>
       <Route exact path="/business" element={<News key="business" per_page={pageSize} category="business" apiKey={apiKey}/>}/>
       <Route exact path="/sports" element={<News  key="sports" per_page={pageSize} category="sports" apiKey={apiKey}/>}/>
       <Route exact path="/general" element={<News key="general" per_page={pageSize} category="general" apiKey={apiKey}/>}/>
       <Route exact path="/health" element={<News key="health" per_page={pageSize} category="health" apiKey={apiKey}/>}/>
       <Route exact path="/entertainment" element={<News key="entertainment" per_page={pageSize} category="entertainment" apiKey={apiKey}/>}/>
       <Route exact path="/technology" element={<News  key="technology" per_page={pageSize} category="technology" apiKey={apiKey}/>}/>
       </Routes>
       </Router>
      </div>
    )
  }
// }

export default App