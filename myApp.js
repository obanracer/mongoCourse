require('dotenv').config();

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

  const kittySchema = mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function() {
    const greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
  };


  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name);

  const fluffy = new Kitten({ name: "Fluffy" });
  fluffy.speak();

  fluffy.save((err, fluffy) => {
    if (err) return console.error(err);
    fluffy.speak();
  });

  silence.save((err, silence) => {
    if (err) return console.error(err);
    silence.speak();
  })

  Kitten.find((err, kittens) => {
    if (err) return console.error(err);
    console.log(kittens);
  });
});


let Person;

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
