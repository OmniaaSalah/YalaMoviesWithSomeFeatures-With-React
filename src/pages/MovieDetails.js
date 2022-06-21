
import { useState,useEffect } from "react"
import axiosInstance from '../axiosconfig/axiosInstance'
import { useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
 const  MoviesDetails=()=>{
    const spinner=useSelector((state)=>state.Spinner.isLoading)
    const params=useParams()
    const [movie,setmovie]=useState([]);
    useEffect(()=>{axiosInstance.get("/"+params.id+"?api_key=51ab5fc21cf88acbb7fa66b560c3a335")
    .then((res)=>{console.log(res.data)
        setmovie(res.data)})
    .catch((err)=>{})}
    ,[])
return(
    <>
    { spinner && <div className="d-flex justify-content-center " style={{paddingTop:'300px'}}>
                                 <div className="spinner-border" role="status">
                                          <span className="visually-hidden">Loading...</span>
                                 </div>
                             </div>
                }
    <h1   style={{fontSize: '60px', textAlign: 'center',paddingTop: '20px'}}><b>{movie.title}</b> </h1>
      <div className="container-fluid " style={{paddingTop: '50px'}} >
      
          <div className="row">
              <div className="col-4" style={{paddingTop: '110px'}}>
                  <p className="mx-3 text-primary" style={{fontSize: '50px'}}><b>{movie.status}</b></p>
                      
              </div>
             <div className="col-8">
                  
                  <img src={"https://image.tmdb.org/t/p/original/"+movie.backdrop_path} id="logoimg"  className="img-fluid" alt="Logo" width="800" height="200" />
             </div>
         </div>
        
      </div>
      <p className="mx-3" style={{fontSize: '20px',paddingTop: '10px'}} ><b>OverView:</b>{movie.overview} <br/><br/></p>
    </>
)

}

export default MoviesDetails;