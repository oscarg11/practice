import { useState } from "react";
import MainHeader from "../components/MainHeader";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {


  return(
  <>
  <Outlet />
    <main>
      <PostsList
      />
    </main>
  </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');// Sending a GET request to the server to fetch posts data
  const resData = await response.json();// Parsing the response data into a JavaScript object (or array)
  return resData.posts;// Returning the posts data as an object
}
