import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={s.item}>
            <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" />
            <p>
                {props.message}
            </p>
            <div>
                <span className={s.like_Block}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQybcLe3y_HzZn1pepXFBg9lNYD55V-Jb3AACU1-vyhweiKODyQ&usqp=CAU" />
                    <div>{props.like}</div> 
                </span>
            </div>
        </div>  
    );
}



export default Post;