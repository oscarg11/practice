import React, {useState} from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal"
import classes from'./PostsList.module.css';

function PostsList(){
    const [ modalIsVisible, setModalIsVisible ]= useState(true);
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
    //Modal hide function
    function hideModalHandler(){
        setModalIsVisible(false);
    }
    return (
    <>
        {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
            />
        </Modal>
        ) : null}
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author={enteredAuthor} body={enteredBody}/>
        </ul>
    </>
    );
}

export default PostsList;