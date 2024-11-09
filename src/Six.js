import React, { useEffect, useState } from "react";

export default function Six() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>response.json())
    .then((data)=>setData(data))
  }, []);
  //   useEffect(()=> {
  //     fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then((response) => {
  //         console.log('Response:', response);
  //         return response.json();
  //     })
  //     .then((json) => {
  //         console.log('Parsed data:', json);
  //         setData(json);
  //     })
  //     .catch((error) => {
  //         console.error('Fetch error:', error);
  //     })
  // },[])
  //   useEffect(() => {
  //     const fetchData = async () => {
  //         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  //         console.log(response);
  //         const resData = await response.json();
  //         setData(resData);
  //     };

  //     fetchData();
  // }, [])
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
