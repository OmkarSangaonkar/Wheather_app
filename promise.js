let num = 1;

// const myPromise = new Promise((resolve, reject) => {
//   if (num > 10) {
//     resolve("its greater than 10");
//   } else {
//     reject(new Error("less thatn 10"));
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello");
//   }, 2000);
// });

// newPromise.then((result) => {
//   console.log(result);
// });

function prom1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

function prom2(num1) {
  return new Promise((resolve, reject) => {
    reject(new Error("error"));
    setTimeout(() => {
      resolve(num1 + 5);
    }, 5000);
  });
}

prom1()
  .then((result) => {
    console.log(result, "prom1 result");
    return prom2(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.massege);
  });
