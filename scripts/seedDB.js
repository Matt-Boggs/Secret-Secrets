const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/secretsecrets"
);

const userSeed = [
  {
    _id: 1,
    name: "Matt",
    secrets: [
      {
        // content of the secret
        secret: "bla bla secret 1 matt",
        // which _id's have access to the secret
        access: [1]
      }
    ]
  },
  {
    _id: 2,
    name: "John",
    secrets: [
      {
        secret: "bla bla secret 1 john",
        access: [2,1]
      },
      {
        secret: "bla bla secret 2 john",
        access: [2,1,3]
      }
    ]
  },
  {
    name: "Jill",
    secrets: [
      {
        secret: "bla bla secret 1 jill",
        access: [3,2]
      },
      {
        secret: "bla bla secret 2 jull",
        access: [3,1]
      },
      {
        secret: "bla bla secret 3 jill",
        access: [3]
      }
    ]
  }
  
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
