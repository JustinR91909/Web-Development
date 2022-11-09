const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 10,
  review: "an old classic."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "John",
//   age: 37,
// });

// person.save();

const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review: "The best."
});

const orange = new Fruit({
  name: "orange",
  rating: 5,
  review: "it's alright"
});

const banana = new Fruit({
  name: "banana",
  rating: 9,
  review: "very convenient"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err);
//   }
//   else{
//     console.log("fruits saved");
//   }
// });

const pineapple = new Fruit({
  name: "pineapple",
  rating: 8,
  review: "a little spicy"
});

pineapple.save();

const person = new Person({
  name: "Amy",
  age: 22,
  favoriteFruit: pineapple
});

person.save()

Fruit.find(function(err, fruits){
  if(err) {
    console.log(err);
  }
  else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "63523b8aa177156635f31c72"}, {name: "apple"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully updated the document");
//   }
// });

// Fruit.deleteOne({name: "apple"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Successfully deleted the document");
//   }
// });

Person.updateOne({name: "John"}, {favoriteFruit: kiwi}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully updated the document");
  }
});
