
import './Movies.css'
import ReactPaginate from "react-paginate";
import { useState,useEffect} from "react"
import axiosInstance from '../axiosconfig/axiosInstance'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
 const  Movies=()=>{

    const spinner=useSelector((state)=>state.Spinner.isLoading)
    const [movies,setmovies]=useState([]);
    useEffect(()=>{axiosInstance.get("/popular?api_key=51ab5fc21cf88acbb7fa66b560c3a335")
    .then((res)=>{console.log(res.data.results)
        setmovies(res.data.results)})
    .catch((err)=>{})}
    ,[]);

  const [page, setPage] = useState(1);
  const moviesPerPage = 4;
  const numberOfRecordsVistited =  page * moviesPerPage;
  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
 
return(
    <>
    { spinner && <div className="d-flex justify-content-center " style={{paddingTop:'300px'}}>
                                 <div className="spinner-border" role="status">
                                          <span className="visually-hidden">Loading...</span>
                                 </div>
                             </div>
                }
    <div className="row row-cols-1 row-cols-md-2 g-4 mx-3 mt-3">
                
                {movies.slice(
                numberOfRecordsVistited,
                numberOfRecordsVistited + moviesPerPage
              ).map((m) => {
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
                            <button className="p-2 " style={{backgroundColor:'black'}}><Link style={{textDecoration: 'none',color:'white'}} to={`/Movies/${m.id}`}>Details</Link></button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
           
        
    </div>
    <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={totalPages}
  onPageChange={changePage}
  containerClassName={"navigationButtons"}
  previousLinkClassName={"previousButton"}
  nextLinkClassName={"nextButton"}
  disabledClassName={"navigationDisabled"}
  activeClassName={"navigationActive"}
/>;
   
    </>
)

}

export default Movies;