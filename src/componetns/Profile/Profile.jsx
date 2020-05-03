import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
        </div>
}

export default Profile;