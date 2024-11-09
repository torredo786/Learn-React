import React from "react";

const CreatePromise = () => {
  const cart = ["shoes", "pants", "kurta"];

  const promise = createOrder(cart);
  console.log("promise", promise); // pending
  promise
    .then((orderId) => {
      console.log("orderId", orderId);
      // proceedToPayment(orderId)
    })
    .catch((err) => {
      console.log("err", err);
    });

  //producer
  function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
      if (!validateCart(cart)) {
        const error = new Error("Cart is not valid"); // create a Error
        reject(error);
      }
      //logic to create order
      const orderId = "12345";
      if (orderId) {
        setTimeout(() => {
          resolve(orderId);
        }, 2000);
      }
    });
    return pr;
  }

  function validateCart(cart) {
    return true;
  }
  return <div>CreatePromise</div>;
};

export default CreatePromise;
