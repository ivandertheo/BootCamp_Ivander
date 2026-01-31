const successPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success! Operation completed");
  }, 2000);
});

successPromise.then((message) => {
  console.log(message);
});

const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error! Operation failed");
  }, 2000);
});

errorPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
