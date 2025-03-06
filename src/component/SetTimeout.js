import React from "react";

const SetTimeout = () => {
  console.log("Start");

  setTimeout(() => {
    console.log("First timeout");

    setTimeout(() => {
      console.log("Second timeout");

      setTimeout(() => {
        console.log("Third timeout");
      }, 2000); // This runs 1 second after the second timeout
    }, 1000); // This runs 2 seconds after the first timeout
  }, 3000); // This runs 3 seconds after 'Start'
  setTimeout(() => {
    console.log("First1 timeout");

    setTimeout(() => {
      console.log("Second1 timeout");

      setTimeout(() => {
        console.log("Third1 timeout");
      }, 2000); // This runs 1 second after the second timeout
    }, 1000); // This runs 2 seconds after the first timeout
  }, 5000); // This runs 3 seconds after 'Start'

  console.log("End");

  return <div>SetTimeout</div>;
};

export default SetTimeout;
