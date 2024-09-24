import React, {useState, useEffect} from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal"
import classes from'./PostsList.module.css';

function PostsList({isPosting, onStopPosting}){ // Destructuring props to get modal visibility state and close handler
    
      // State to manage the list of posts; starts as an empty array
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {// Asynchronous function to fetch posts data from the server
            const response = await fetch('http://localhost:8080/posts');// Sending a GET request to the server to fetch posts data
            const resData = await response.json();// Parsing the response data into a JavaScript object (or array)
            setPosts(resData.posts);// Updating the posts state with the fetched data, causing the component to re-render
        }
 // Calling the fetchPosts function immediately to fetch data when the component mounts
        fetchPosts();
    }, []) // Empty dependency array means this effect runs only once when the component mounts

     // Function to add a new post; receives post data as an argument
    function addPostHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Update the posts state by adding the new post data to the existing post
        setPosts((prevPosts) => {
            return [...prevPosts, postData];// Spread the previous posts and add the new post at the end
        });
    }
    return (
    <>{/* Conditional rendering: Show the Modal with the NewPost component if isPosting is true */}
        {isPosting && (
        <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting}onAddPost={addPostHandler}/>
        </Modal>
        )}

        {/* Conditional rendering: Show the list of posts if there are any */}
        {posts.length > 0 && (
        <ul className={classes.posts}>
            {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
        </ul>
        )}

        {/* Conditional rendering: Show this message if there are no posts */}
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet!</h2>
                <p>Start adding some!</p>
            </div>
        )}
    </>
    );
}

export default PostsList;