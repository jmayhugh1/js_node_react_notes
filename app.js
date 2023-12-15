
//a promise is an object that may produce a single value some time in the future
// either a resolved value or a reason that it's not resolved
// a promise may be in one of three possible states: fulfilled, rejected, or pending
// a promise starts in pending state and then changes to either fulfilled or rejected
const event = new Promise((resolve, reject) => {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    resolve("successs " + rand);
  } else {
    reject("failure" + rand);
  }
});

event
  .then((message) => {
    console.log(message); // for success
  })
  .catch((message) => {
    //for errors
    console.log(message);
  })
  .finally(() => {
    console.log("finished");
  });

//old way to make get requests
// const axios = require("axios");
// const data = axios.get('https://cat-fact.herokuapp.com/facts')
// data.then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("promise resolved")
// })
// console.log(data)

//much easier way with asynch await
//first make a function that is declared as asynch
const axios = require("axios");
const fetchdata = async () => {
  //must use wait
  try {
    const data = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(data);
  } catch (err) {
    console.log(err)
  }
};

fetchdata();
