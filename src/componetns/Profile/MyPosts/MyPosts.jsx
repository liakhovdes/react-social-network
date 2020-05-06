import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?' likesCount='15'/>
            <Post message='It is my first post' likesCount='20'/>
        </div>
    )
}

export default MyPosts;