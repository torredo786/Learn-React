import React, { useEffect } from "react";
import promises from "./promises";

const PromisApi = () => {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 resolved");
    }, 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 resolved");
      //   reject("p2 rejected");
    }, 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 resolved");
    }, 1000);
  });
  useEffect(() => {
    //all settled promises and if any one is rejected then it will be rejected
    Promise.all([p1, p2, p3])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });

    //all settled/resolved promises
    promises
      .allSettled([p1, p2, p3])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });

    //first settled/resolved promise and if all are rejected then it will give aggregate error
    promises
      .race([p1, p2, p3])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>promisApi</div>;
};

export default PromisApi;
