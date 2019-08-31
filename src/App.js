 import React ,{Component}from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import{BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';



const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

function App() {
  return(



    <Router>
      <NavLink activeclass="active" to ="/about">About</NavLink>
       <NavLink activeclass ="active" to="/home">home</NavLink>





    </Router>
  );
}





export default App;