
import './App.css';
import Details from './components/Details';
import Home from './components/Home';
import Nav from './components/nav';
import{Route, Routes} from 'react-router-dom';



function App() {
  

 
  return (
    <>
   <Nav />
   <Routes>
    <Route Exact path ="/" element={<Home/>} />
    <Route Exact path ="/country/:countryName" element={<Details/>} />
   </Routes>
   </>
  );
}

export default App;
