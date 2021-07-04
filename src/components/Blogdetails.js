import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';


function Blogdetails() {
  const history =useHistory ();
    const {id} = useParams();
    const {data , err , loading}=useFetch('http://localhost:8000/blogs/' +id);
    const click=()=>{
      fetch('http://localhost:8000/blogs/' +id ,{
        method:'DELETE'
      })
      .then(()=>{
        history.push('/');
      })
    }

    return (
        <div className="blog-details">
        { loading && <div>Loading...</div> }
        { err && <div>{ err }</div> }
        { data && (
          <article>
            <h2>{ data.title }</h2>
            <p>Written by { data.author }</p>
            <div>{ data.body }</div>
          </article>
        )}
        <button onClick={click}>Delete</button>
      </div>
    )
}

export default Blogdetails
