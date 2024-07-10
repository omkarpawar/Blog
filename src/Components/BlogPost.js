import React from "react";


const BlogPost=({post})=>{
    return(
        <div>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
    )
}

export default BlogPost;