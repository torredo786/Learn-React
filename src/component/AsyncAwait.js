import React from "react";

const AsyncAwait = () => {
  //always return a promise
  //   async function getData() {
  //     return "Hello world";
  //   }
  //   const data = getData();
  //   console.log(data); //will return promise
  //   data.then((res) => {
  //     console.log(res); //will return Hello world
  //   });

  //---------------------------------------

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise resolved");
    }, 5000);
  });
  async function getData1() {
    return p;
  }
  const data1 = getData1();
  console.log("data1", data1);
  data1.then((res) => {
    console.log(res);
  });

  //====================================Async-Await====================================
  //this combo is used to handle promises
  //await is a keyword which is only be used inside async function
  async function handlePromise() {
    const res = await p;
    console.log("res", res);
  }
  handlePromise();

  return <div>AsyncAwait</div>;
};

export default AsyncAwait;
