import {Link} from 'react-router-dom'; 


export default function Analytics(){
    return (
         <div style = {{flex:1, backgroundColor: 'orange'}}>
             <h1>Analytics </h1> 
             <Link to = "/">
             <h1>Home</h1>
             </Link>
         </div>
    )
}