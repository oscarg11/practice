import React, {useState} from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal"
import classes from'./PostsList.module.css';

function PostsList({isPosting, onStopPosting}){
    
    return (
    <>
        {isPosting && (
        <Modal onClose={onStopPosting}>
            <NewPost
                onCancel={onStopPosting}
            />
        </Modal>
        )}
        <ul className={classes.posts}>
            <Post author="Oscar" body="Hello"/>
            
        </ul>
    </>
    );
}

export default PostsList;