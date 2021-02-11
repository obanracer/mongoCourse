var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// first, we create the schema
var kittenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    breed: String
});  

// we can add methods to the schema
kittenSchema.methods.speak = function() {
  const name = "Meow name is " + this.name;
  const age = "I'm " + this.age + " years old";
  const breed = this.breed ? "and I'm a " + this.breed : "and I don't know what I am";
  
  const greeting = name + ", " + age + " " + breed + ".";
  console.log(greeting);
};

module.exports = mongoose.model("Kitten", kittenSchema);