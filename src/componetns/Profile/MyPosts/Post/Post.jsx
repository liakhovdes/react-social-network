import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg' />
                post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;