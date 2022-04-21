import logo from './logo.svg';
import './App.css';
import Analytics from './Analytics';
import Home from './Home'
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from './Sidebar'; 

function App() {
  return (
    
        <div style = {{display:'flex'}}>
          
          <Sidebar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="analytics" element = {<Analytics/>} />
        </Routes>


        </div>
        
        
      
    
  );
}

const style = {
  App:{
    display:'flex',
    flex:1, 
    flexDirection:'column',
    width:'100%',
  },
  header:{
    display:'flex',
    flex:1, 
    backgroundColor:'blue', 
    alignItems:'center', 
    justifyContent:'center', 

  }, 
  pStyle: {
    fontSize:'2em', 
    color:'yellow',
    fontWeight:'bold',
  } 
}

export default App;
