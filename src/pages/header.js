import { Link } from "react-router-dom";


export default function Header(){



    return(
 <>
        


<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <Link style={{color:'white',textDecoration: 'none'}} className="mx-5" to="/">Home</Link>
        </li>
        <li className="nav-item">
        
          <Link style={{color:'white',textDecoration: 'none'}} className="mx-5" to="/Movies">TopMovies</Link>
        </li>
        <li className="nav-item">
        
          <Link style={{color:'white',textDecoration: 'none'}} className="mx-5" to="/Pages">AllMovies</Link>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success  " style={{backgroundColor:'black'}} type="submit"><b style={{color:'white'}}>Search</b></button>
      </form>
    </div>
  </div>
</nav>

     
 </>
    )
}