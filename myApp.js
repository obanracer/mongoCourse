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
  
  // // test kitties
  // console.log("deploying test kitties");
  // // we create some documents (kinda like sql table entries)
  // const silence = new KittenModel({
  //   name: "Silence"
  // });
  // const fluffy = new KittenModel({
  //   name: "Fluffy",
  //   age: 10,
  //   breed: "Persian"
  // });
  // const noName = new KittenModel({
  //   name: "No Name",
  //   age: 5,
  //   breed: "Siamese"
  // });

  // // we save the documents of the Kitten Model (kinda like sql insert entry into table)
  // fluffy.save((err, fluffy) => {
  //   if (err) return console.error(err);
  //   fluffy.speak();
  // });
  // silence.save((err, silence) => {
  //   if (err) return console.error(err);
  //   silence.speak();
  // })
  // noName.save((err, noName) => {
  //   if (err) return console.error(err);
  //   noName.speak();
  // })

  // we display the stored documents (kinda like sql select from)
  // KittenModel.find((err, kittens) => {
  //   if (err) return console.error(err);
  //   console.log(kittens);
  // });
  
});

const createAndSavePerson = (done) => {
  console.log("attempting to create and save a person...");

  const newPerson = new PersonModel({
    name: "Cosme Fulanito",
    age: 56,
    favoriteFoods: ["milanesa con papas fritas", "tarta de jamon y queso"]
  });

  newPerson.save(function(err, data) {
    if (err) {
      console.log("oh no :c");
      console.log(err);
      done(err);
    } else {
      console.log("success!");
      console.log("created and saved:", data);
      done(null, data);
    }
  });

  // newPerson.save()
  //   .then(function(data) {
  //     console.log("success!");
  //     console.log("created and saved:", data);
  //     done(null, data);
  //   })
  //   .catch(function(err) {
  //     console.log("oh no :c");
  //     console.error(err);
  //     done(err);
  //   });
};

const createManyPeople = (arrayOfPeople, done) => {
  console.log("attempting to create and save multiple people...");
  console.log(arrayOfPeople);
  PersonModel.create(arrayOfPeople, function(err, data) {
    if (err) {
      console.log("oh no :c");
      console.log(err);
      done(err);
    } else {
      console.log("success!");
      console.log("created and saved:", data);
      done(null, data);
    }
  });
}

const findPeopleByName = (personName, done) => {
  console.log("attempting to find someone by name...");
  console.log("looking for " + personName + "...");

  PersonModel.find({ name: personName }).exec()
    .then(data => {
      console.log("success!");
      console.log("found:", data);
      done(null, data);
    })
    .catch(err => {
      console.log("oh no :c");
      console.log(err);
      done(err);
    });
};

const findOneByFood = (food, done) => {
  console.log("attempting to find one person by food...");
  console.log("looking for someone who likes '" + food + "'...");

  PersonModel.findOne({ favoriteFoods: food }).exec()
    .then((data) => {
      console.log("success!");
      console.log("found:", data);
      done(null, data);
    })
    .catch((err) => {
      console.log("oh no :c");
      console.log(err);
      done(err);
    });
};

const findPersonById = (personId, done) => {
  console.log("attempting to find someone by id...");
  console.log("looking for the person whose id is " + personId + "...");

  PersonModel.findById(personId).exec()
    .then((data) => {
      console.log("success!");
      console.log("found:", data);
      done(null, data);
    })
    .catch((err) => {
      console.log("oh no :c");
      console.log(err);
      done(err);
    });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  PersonModel.findById(personId).exec()
    .then((doc) => {
      console.log("we found", doc);
      console.log("let's see if we can edit it...");
      doc.favoriteFoods.push(foodToAdd);
      doc.save()
        .then((data) => {
          console.log("success!");
          console.log("doc updated:", data);
          done(null, data);
        })
        .catch((err) => {
          console.log("oh no :c");
          console.log(err);
          done(err);
        });
    })
    .catch((err) => {
      console.log("oh no :c");
      console.log(err);
      done(err);
    });
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

exports.PersonModel = PersonModel;
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
