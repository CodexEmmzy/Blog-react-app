import { useState } from "react";
import{ useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('select')
    const [isLoading, setIsLoading] = useState(false)
    const [work, setWork] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
       
       
            e.preventDefault()
            const blog = {title, body, author}

            if(blog.author === 'select') {
                setWork(true)
            } 
    
            else {
                setIsLoading(true)
                setWork(false)
                fetch('https://cors-anywhere.herokuapp.com/corsdemo/http://localhost:1000/blogs', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(blog)
                }).then(() => {
                    console.log('new blog added')
                    setIsLoading(false)
                    // history.go(-1)
                    history.push('/')
                })

            } 
        
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                 type="text" 
                 required
                 value={title}
                 placeholder={'Blog title'}
                 onChange={e => setTitle(e.target.value)}
                 />

                <label>Blog body:</label>
                <textarea
                 rows={10}
                 required
                 value={body}
                 placeholder={'Blog Body'}
                 onChange={e => setBody(e.target.value)}
                 />

                 <label>Blog author:</label>
                 <select
                   value={author}
                   onChange={e => setAuthor(e.target.value)}
                 >
                    <option value="select">Select Author</option>
                    <option value="charles">charles</option>
                    <option value="emmzy">emmzy</option>
                    <option value="codex">codex</option>
                 </select>
                 {!isLoading && <button type="submit">Add Blog</button>}
                 {isLoading && <button type="submit">Adding blog...</button>}
            </form>
            {work && <p className='wrong'>Select A Valid Authour</p>}
        </div>
    );
}
 
export default Create;