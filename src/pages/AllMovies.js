

import { useState,useEffect} from "react"
import axiosInstance from '../axiosconfig/axiosInstance'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ChangePage from "../Store/Actions/pageaction";
import store from "../Store/store";
 const  AllMovies=()=>{
 
    const pagestate=useSelector((state)=>state.Pageindex.Page)
   
    
    const spinner=useSelector((state)=>state.Spinner.isLoading)
    const [movies,setmovies]=useState([]);
    useEffect(()=>{axiosInstance.get("/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page="+1)
    .then((res)=>{console.log(res);
       
        setmovies(res.data.results)})
    .catch((err)=>{})}
    ,[]);

    function getval(){
        const currentpage=store.getState().Pageindex.Page;
        
        return currentpage;
    }
    const decresepageindex=()=>{
        if(pagestate>1)

        {  
            store.dispatch(ChangePage(pagestate-1));
        
              const pageval=getval();
        
              axiosInstance.get("/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page="+ pageval)
              .then((res)=>{
                      setmovies(res.data.results)
                     })
               .catch((err)=>{})
        }
        
    }
    const incresepageindex=()=>{
        if(pagestate<500)

        {
            store.dispatch(ChangePage(pagestate+1));
        
            const pageval=getval();
        
             axiosInstance.get("/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page="+ pageval)
              .then((res)=>{
                      setmovies(res.data.results)
                     })
              .catch((err)=>{})
         }
        
    }
return(
    <>
   
    { spinner && <div className="d-flex justify-content-center " style={{paddingTop:'300px'}}>
                                 <div className="spinner-border" role="status">
                                          <span className="visually-hidden">Loading...</span>
                                 </div>
                             </div>
                }
                
        <h1  className="d-flex justify-content-center " >Page No: {pagestate}</h1>    
    <div className="row row-cols-1 row-cols-md-2 g-4 mx-3 mt-3">
        
                {movies.map((m) => {
                    return (
                      <div className="col" key={m.id} >
                        <div className="card" style={{height:'500px'}}>
                          <img
                           src={"https://image.tmdb.org/t/p/original/"+m.backdrop_path}
                            style={{ height: "200px" }}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{m.title}</h5>
                            <p className="card-text">{m.overview}</p>
                            <button className="p-2" style={{backgroundColor:'black'}}><Link style={{textDecoration: 'none',color:'white'}} to={`/Movies/${m.id}`}>Details</Link></button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
           
           
    </div>
    <button  className=" mt-3 p-2" style={{backgroundColor:'black',color:'white',marginLeft:'570px',width:'130px'}} onClick={()=>{decresepageindex()}}>Prev</button>
    <button style={{backgroundColor:'black',color:'white',marginLeft:'115px',width:'130px'}} className="mt-3 p-2" onClick={()=>{incresepageindex()}}>Next</button>
             
    </>
)

}

export default AllMovies;