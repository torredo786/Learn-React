import React from "react";

const AsyncAwait1 = () => {
  async function fetchSequentially() {
    const url1 = "https://jsonplaceholder.typicode.com/posts/1";
    const url2 = "https://jsonplaceholder.typicode.com/posts/2";
    const url3 = "https://jsonplaceholder.typicode.com/posts/3";
    const response1 = await fetch(url1);
    const data1 = await response1.json();
    console.log("Data 1:", data1);

    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log("Data 2:", data2);

    const response3 = await fetch(url3);
    const data3 = await response3.json();
    console.log("Data 3:", data3);
  }

  fetchSequentially();

  return <div>AsyncAwait1</div>;
};

export default AsyncAwait1;
