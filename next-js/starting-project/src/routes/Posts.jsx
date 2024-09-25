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
