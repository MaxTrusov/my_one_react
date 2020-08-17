import React from 'react';
import s from './Person.module.css';
import About_me from './About_me/About_me';
import My_post from './My_post/My_post';

const Person = (props) => {
    return(
        <div className={s.person_wrapp}>
            <About_me />
            <My_post
                post={props.post}
                addPost={props.addPost} />
        </div>
    );
}

export default Person;