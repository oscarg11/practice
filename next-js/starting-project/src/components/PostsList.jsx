import { useLoaderData } from 'react-router-dom';
import Post from "./Post";
import classes from'./PostsList.module.css';

function PostsList(){ // Destructuring props to get modal visibility state and close handler
    const posts = useLoaderData();


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
    <>
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