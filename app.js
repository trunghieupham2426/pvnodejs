const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("sucsess");
  } else {
    reject("fail");
  }
});

promise.then((data) => console.log(data));
