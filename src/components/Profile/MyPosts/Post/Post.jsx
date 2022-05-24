import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/3c/4b/fd/3c4bfd9273bfc4827e76709e3db4deec.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )

}

export default Post;