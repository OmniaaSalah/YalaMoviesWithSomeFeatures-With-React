import logo from '../assets/2.jpg'

export default function Home(){



    return(
 <>
        
        <div className="container-fluid " style={{paddingTop: '100px',backgroundColor:'skyblue',height:'700px'}} >
          <div className="row">
              <div className="col-4" style={{paddingTop: '110px'}}>
                  <h1 className='text-primary'  style={{fontSize: '60px',textAlign: 'center'}}>Join Us <br/><br/>
                      To Watch Movies <br/><br/> 
                     </h1>
              </div>
             <div className="col-8">
       
                  <img src={logo} id="logoimg"  className="img-fluid" alt="Logo" width="800" height="200" />
             </div>
         </div>
        
      </div>

     
 </>
    )
}