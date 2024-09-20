import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel}) {
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

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        console.log(postData);
        onCancel();
    }
return (
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
);
}

export default NewPost;