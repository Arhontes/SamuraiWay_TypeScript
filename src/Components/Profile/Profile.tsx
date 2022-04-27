import React from 'react';
import p from './Profile.module.css'

const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src="https://wallpaperaccess.com/full/3725741.jpg"/>
            </div>
            <div>
                ava + decription
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className={p.post}>post1</div>
                <div className={p.post}>post2</div>
                <div className={p.post}>post3</div>

            </div>

        </div>
    );
};

export default Profile;