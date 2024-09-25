import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost({ onCancel, onAddPost }) { // Component receives two props: onCancel to handle cancel action, and onAddPost to handle adding a new post
    const [enteredBody, setEnteredBody] = useState(''); // Body text state
    const [enteredAuthor, setEnteredAuthor]=useState('');// Author text state

     // Handler function to update state when the body text changes
    function bodyChangeHandler(event){
        console.log(event.target.value);
        setEnteredBody(event.target.value); // Updates the enteredBody state with the new value
    }
      // Handler function to update state when the author's name changes
    function authorChangeHandler(event){
        console.log(event.target.value);
        setEnteredAuthor(event.target.value);// Updates the enteredAuthor state with the new value
    }
     // Function to handle form submission
    function submitHandler(event){
        event.preventDefault();// Prevents the default form submission behavior (page reload)
        // Creates a new post object with the entered body text and author name
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        console.log(postData);
        onAddPost(postData);// Calls the onAddPost function (passed as a prop) to add the new post
        onCancel();// Calls the onCancel function to close the form/modal
    }
return (
<Modal>
    <form className={classes.form} onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
    
        <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>

        <p className={classes.actions}>
            <button type="button" onClick={onCancel}>Cancel</button>
            <button>Submit</button>
        </p>
    </form>
</Modal>
);
}

export default NewPost;