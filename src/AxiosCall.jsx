// Axios automatically detects HTTP errors (like 404, 500, etc.) and throws an error if the response status is not in the range of 2xx.

// Unlike fetch(), which doesn't reject on HTTP errors, Axios makes it easier to handle errors using try/catch or .catch().

import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosCall = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        setData(response.data); // Axios auto-parses JSON
        console.log("sss");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log("sfhgh");
  }, []);

  // POST request with Axios
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post("https://dummyjson.com/posts/add", {
          title: "I am in love with someone.",
          userId: 5,
        });
        setData(response.data);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    postData();
  }, []);

  //using request
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.request({
          method: "post",
          url: "https://dummyjson.com/posts/add",
          // headers: { Authorization: `Bearer ${token}` },
          data: { title: "I am in love with someone.", userId: 5 },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    postData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Title: {data.title || "No Title"}</h1>
          <h2>Body: {data.body || "No Body"}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AxiosCall;
