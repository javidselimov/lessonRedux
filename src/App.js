
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Portfolio from './pages/Portfolio';
import Details from './pages/Details';
import Nav from './components/Nav';

function App() {
  return (
    
     <BrowserRouter>
        <Nav/>
       <Routes>
           
         <Route path='/' element= {<Home/>}/>
         <Route path='/portfolio' element= {<Portfolio/>}/>
         <Route path='/details/:id' element= {<Details/>}/>
       </Routes>
     </BrowserRouter>
  
  );
}

export default App;
