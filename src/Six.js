import React, { useEffect, useState, useRef } from "react";

export default function Six() {
  const [data, setData] = useState(null);
  const hasFetchedGet = useRef(false);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //   .then((response)=>{response.json()})
  //   .then((data)=>setData(data))
  // }, []);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/posts/search?q=love")
  //     .then((res) => res.json())
  //     .then((data)=>setData(data.posts[0]));
  // }, []);

  

  //get request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  //post request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "I am in love with someone.",
            userId: 5,
          }),
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // use useRef to call only once on reload or refresh
  useEffect(() => {
    if (hasFetchedGet.current) return;
    hasFetchedGet.current = true;

    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
          <h2>Body: {data.body}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
