import React from 'react';
import s from'./Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' />
        </div>
        <div>
            ava + description
    </div>
        <div>
            My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
        </div>
    </div>
}

export default Profile;