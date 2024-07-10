import React,{useState} from "react";
import BlogForm from "./Components/BlogForm";
import BlogPost from "./Components/BlogPost";

function App (){
  
  const [posts,setposts]=useState([]);

  const addPost=(post)=>{
     return setposts([post, ...posts])
  }

  return (
    <div className="App">
      <h1>Lets get started</h1>
      <BlogForm addPost={addPost}></BlogForm>
      <div>
        {posts.map((post,index)=>{
          return(<BlogPost key={index}  post={post}/>)
        })}
      </div>
    </div>
  );
}

export default App;
