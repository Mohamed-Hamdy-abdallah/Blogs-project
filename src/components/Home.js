//import React ,{useState , useEffect} from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';


function Home() {
    const {data , err , loading}=useFetch('http://localhost:8000/blogs');



    return (
        <div className='home'>
          
          {loading && <h2>Loading data...</h2> }
           {err && <div>{err}</div>}
            {data && <Bloglist blogs={data}  />}
        </div>
    )
}


export default Home
