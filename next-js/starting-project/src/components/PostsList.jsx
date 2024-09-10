import React, {useState} from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from'./PostsList.module.css';

function PostsList(){
    const [enteredBody, setEnteredBody] = useState(''); // Body text state
    const [enteredAuthor, setEnteredAuthor]=useState('');// Author text state

    //Body text function
    function bodyChangeHandler(event){
        console.log(event.target.value);
        setEnteredBody(event.target.value);
    }
    //Author text function
    function authorChangeHandler(event){
        console.log(event.target.value);
        setEnteredAuthor(event.target.value);
    }
    return (
    <>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author={enteredAuthor} body={enteredBody}/>
        </ul>
    </>
    );
}

export default PostsList;