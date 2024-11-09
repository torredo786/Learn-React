import React from "react";

const PromiseChain = () => {
  getUserDetails()
    .then((user) => {
      console.log("User details:", user);
      return getUserPosts(user.id);
    })
    .then((posts) => {
      console.log("User posts:", posts);
      return getPostComments(posts[0].id);
    })
    .then((comments) => {
      console.log("Comments on the first post:", comments);
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    });

  // Mock Promisified API functions:
  function getUserDetails() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "John Doe" });
      }, 2000);
    });
  }

  function getUserPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 101, title: "First Post" },
          { id: 102, title: "Second Post" },
        ]);
      }, 2000);
    });
  }

  function getPostComments(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Comment 1", "Comment 2"]);
      }, 2000);
    });
  }

  return <div>PromiseChain</div>;
};

export default PromiseChain;
