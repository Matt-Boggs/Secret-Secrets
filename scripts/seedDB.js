const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/secretsecrets"
);

const userSeed = [
  {
    name: "Matt"
  },
  {
    name: "John"
  },
  {
    name: "Jill"
  }
  
];

const secretSeed = [
    {
      // content of the secret
      secret: "bla bla secret 1 matt",
      // which _id's have access to the secret
      access: [1]
    },
    {
      secret: "bla bla secret 1 john",
      access: [2,1]
    },
    {
      secret: "bla bla secret 2 john",
      access: [2,1,"5fee44625bf67c45c4b2d2cd"]
    },
    {
      secret: "bla bla secret 1 jill",
      access: ["5fee44625bf67c45c4b2d2cd",2]
    },
    {
      secret: "bla bla secret 2 jull",
      access: ["5fee44625bf67c45c4b2d2cd",1]
    },
    {
      secret: "bla bla secret 3 jill",
      access: ["5fee44625bf67c45c4b2d2cd"]
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

db.Secret
  .remove({})
  .then(() => db.Secret.collection.insertMany(secretSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
