import React,{useState} from 'react';



const BlogForm=(addPost)=>{

    const [imageUrl, setImageUrl] = useState('');
    const [title,settitle]=useState('');
    const [description,setdescription]=useState('');


    const formSubmitHandler=(event)=>{
        event.preventDefault();
    
        const newPost = { imageUrl, title, description };
        addPost(newPost);

        console.log(addPost)
        setImageUrl('');
        settitle('');
        setdescription('');
    }



    return(
        <form onSubmit={formSubmitHandler}>
            <div>
                <label>Image Url</label>
                <input type='text' value={imageUrl} onChange={(event)=>setImageUrl(event.target.value)}/>
            </div>

            <div>
                <label>Title</label>
                <input type='text' value={title} onChange={(event)=>settitle(event.target.value)}/>
            </div>

            <div>
                <label>Blog Description</label>
                <input type='text' value={description} onChange={(event)=>setdescription(event.target.value)}/>
            </div>

            <button type='submit'>POST BLOG</button>
        </form>
    )

}

export default BlogForm;