
import {Link} from 'react-router-dom'; 
 

export default function Sidebar (){
     return (
        <div style = {style.container}>
          <h3>Menu</h3>  
          <Link to="/">  
          <h1>Routes</h1> 
          </Link >
          <Link to="/analytics">  
          <h1>Analytics</h1> 
          </Link >
          <Link to="/analytics">  
          <h1>Analytics</h1> 
          </Link >
          
          </div>    

     )
}

const style = {
    container:{
     display: 'flex',
     flexDirection: 'column',
     width: '10em',
     marginRight:'10em', 
     marginLeft:'2em',
     border: '1px solid', 
     padding: '2em'     
    }
}