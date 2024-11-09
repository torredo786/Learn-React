import React from "react";
//promise objects are immutable
//promise is a placeholder for certain period of time until the async operation is completed
//promise is a placeholder for a value that will be available in the future

const promises = () => {
  //   console.log("a", a, b, c, arrowFunction, genFunction); //a undefined undefined undefined undefined ƒ
  //   const a = "saif";
  //   let b = "saif";
  //   var c = "saif";
  //   const arrowFunction = () => {
  //     console.log("getUserData");
  //   };
  //   function genFunction() {
  //     console.log("handlePromise");
  //   }
  const GITHUB_API = "https://api.github.com/users/akshaymarch7";
  const userData = fetch(GITHUB_API); // fetch returns as a promises
  console.log("userData", userData); //"userData" Promise {<pending>}
  userData.then((data) => {
    console.log("data", data); //response{...}
    data.json().then((data) => {
      console.log("data1", data); //
    });
  });
  
  

  return <div>promises</div>;
};

export default promises;
