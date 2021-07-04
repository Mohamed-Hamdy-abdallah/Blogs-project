import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router';

function Create() {
    const history = useHistory();
    const [title, setInput] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('mario');

    const click = (event)=>{
        event.preventDefault();
        fetch('http://localhost:8000/blogs',{
            method:'post',
            headers:{"Content-type" : "application/json"},
            body : JSON.stringify({title ,body:text,author})
        }).then(()=>{console.log({title , text , author});
    history.push('/');
});
        setInput('');
        setText('');
    }
    return (
        <div className='create'>
            <h2>Add new blog</h2>
           <form onSubmit={click}>
               <label>Blog title :</label>
               <input 
               required
               value={title}
              onChange={(e)=>setInput(e.target.value)}/>

              <label>Blog body :</label>
               <textarea 
               required
               value={text}
              onChange={(e)=>setText(e.target.value)}>
                </textarea>

              <label>Blog author :</label>
               <select
               value={author}
               onChange={(e)=>setAuthor(e.target.value)}
               >
                   <option value='mario'>Mario</option>
                   <option value='Yoshi'>Yoshi</option>
               </select>

              <button>Submit</button>
              
           </form>
        </div>
    )
}

export default Create
