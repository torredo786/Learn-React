import { useEffect, useRef } from "react";

function doTask1(callback) {
  console.log("callback",callback)
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 1000);
}

function doTask2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback();
  }, 1000);
}

function doTask3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback();
  }, 1000);
}

function doTask4(callback) {
  console.log("callback1",callback)
  setTimeout(() => {
    console.log("Task 4 completed");
    callback();
  }, 1000);
}

export default function CallbackHell() {
  const tasksExecuted = useRef(false);

  useEffect(() => {
    if (tasksExecuted.current) return; // Skip if already executed

    tasksExecuted.current = true;
    doTask1(() => {
      doTask2(() => {
        doTask3(() => {
          doTask4(() => {
            console.log("All tasks completed");
          });
        });
      });
    });
  }, []);

  return <div>Callback Hell Example</div>;
}

// To ensure the tasks run only once, even in StrictMode, you can use a ref to track whether the tasks have already been executed. Here's how to modify your code:
