import React from 'react';
import s from './My_post.module.css';
import Post from './New_post/Post';

const My_post = (props) => {
    let postsElement = 
        props.post.map( p => <Post message={p.post} like={p.like} />);
    
    let newPostElement = React.createRef();

    let addPost = () => {
        // debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ' ';
    };
    return(
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost} >Add Post</button>
            </div>           

            <div>
               {postsElement}
            </div>            
        </div> 
    );
}

export default My_post;