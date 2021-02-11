require('dotenv').config();

var KittenModel = require("./models/kitten.js");
var PersonModel = require("./models/person.js");

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("connected to mongoDB successfully");
  })

  .catch((err) => {
    console.log("error :(");
    console.error(err.stack);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("open i guess?");
  /*
  // we create some documents (kinda like sql table entries)
  const silence = new KittenModel({
    name: "Silence"
  });
  const fluffy = new KittenModel({
    name: "Fluffy",
    age: 10,
    breed: "Persian"
  });
  const noName = new KittenModel({
    name: "No Name",
    age: 5,
    breed: "Siamese"
  });

  // we save the documents of the Kitten Model (kinda like sql insert entry into table)
  fluffy.save((err, fluffy) => {
    if (err) return console.error(err);
    fluffy.speak();
  });
  silence.save((err, silence) => {
    if (err) return console.error(err);
    silence.speak();
  })
  noName.save((err, noName) => {
    if (err) return console.error(err);
    noName.speak();
  })
  // we display the stored documents (kinda like sql select from)
  KittenModel.find((err, kittens) => {
    if (err) return console.error(err);
    console.log(kittens);
  });
  */
});


let Person = PersonModel;

const createAndSavePerson = (done) => {

  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
