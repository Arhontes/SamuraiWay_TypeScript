import React from 'react';
import np from './NewPost.module.css'
const NewPost = () => {
    return (
        <div className={np.input_area}>
            <textarea>

            </textarea>
            <button>
                +
            </button>
        </div>
    );
};

export default NewPost;