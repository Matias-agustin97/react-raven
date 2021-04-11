import {useState} from 'react'
import {useHistory} from 'react-router-dom'


const Create=()=>{
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('mario')
    const [isPending,setIspending]=useState(false)
    const history= useHistory()


    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog={title,body,author }
        setIspending(true)

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log(blog);
            setIspending(false)
            history.push('/')
        })
    }

    return(
        <div className='create'>
            <h1>create something</h1>
            <form action="" onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea value={body} required onChange={(e)=>setBody(e.target.value)}></textarea>
                <label >Blog author:</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value )}>
                    <option value="mario">mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Subiendo blog</button>}
            </form>
        </div>
    )
}



export default Create