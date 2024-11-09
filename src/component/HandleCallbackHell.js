import React, { useEffect } from "react";

const HandleCallbackHell = () => {
  // ... existing code ...

  async function fetchUserDetails() {
    try {
      console.log('Fetching user details...');
      const user = await getUserDetailsPromise();
      console.log('Fetched user:', user);
      
      console.log('Fetching user posts...');
      const posts = await getUserPostsPromise(user.id);
      console.log('Fetched posts:', posts);
      
      console.log('Fetching post comments...');
      const comments = await getPostCommentsPromise(posts[0].id);
      console.log('Fetched comments:', comments);
      console.log("Comments on the first post:", comments);
    } catch (err) {
      console.error("Error occurred:", err);
    }
  }

  function getUserDetailsPromise() {
    console.log('Starting getUserDetailsPromise...');
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolving getUserDetailsPromise...');
        resolve({ id: 1, name: "John Doe" });
      }, 1000);
    });
  }

  function getUserPostsPromise(userId) {
    console.log('Starting getUserPostsPromise for userId:', userId);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolving getUserPostsPromise...');
        resolve([
          { id: 101, title: "First Post" },
          { id: 102, title: "Second Post" },
        ]);
      }, 1000);
    });
  }

  function getPostCommentsPromise(postId) {
    console.log('Starting getPostCommentsPromise for postId:', postId);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Resolving getPostCommentsPromise...');
        resolve(["Comment 1", "Comment 2"]);
      }, 1000);
    });
  }

// ... existing code ...
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return <div>HandleCallbackHell</div>;
};

export default HandleCallbackHell;
