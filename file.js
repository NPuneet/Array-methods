const data = require("./food.json");
const names = (name) => {
  return name.foodname;
};
// function to list all the food items
const listAll = () => {
  const items = data.map(names);
  console.log(items);
};
listAll();

// function to list all the food items with category vegetables
const vegetables = () => {
  const filteredVeggies = data
    .filter((food) => food.category === "Vegetable")
    .map(names);
  console.log(filteredVeggies);
};
vegetables();

// function to list all the food items with category fruit

const fruits = () => {
  const filteredFruits = data
    .filter((food) => food.category === "Fruit")
    .map(names);
  console.log(filteredFruits);
};
fruits();

// function to list all the food items with category protien

const protien = () => {
  const filteredProtein = data
    .filter((food) => food.category === "Protein")
    .map(names);
  console.log(filteredProtein);
};
protien();

// function to list all the food items with category nuts

const nuts = () => {
  const filteredNuts = data
    .filter((food) => food.category === "Nuts")
    .map(names);
  console.log(filteredNuts);
};
nuts();

// function to list all the food items with category grains

const grain = () => {
  const filteredGrains = data
    .filter((food) => food.category === "Grain")
    .map(names);
  console.log(filteredGrains);
};
grain();

// function to list all the food items with category dairy

const dairy = () => {
  const filteredDairy = data
    .filter((food) => food.category === "Dairy")
    .map(names);
  console.log(filteredDairy);
};
dairy();

// function to list all the food items with calorie above 100

const calorieDense = () => {
  const dense = data.filter((food) => food.calorie > 100).map(names);
  console.log(dense);
};
calorieDense();

// function to list all the food items with calorie below 100

const lowCalorie = () => {
  const low = data.filter((food) => food.calorie < 100).map(names);
  console.log(low);
};
lowCalorie();

// function to list all the food items with highest protien content to lowest

const compareProtein = () => {
  const content = data
    .sort((a, b) => {
      return b.protiens - a.protiens;
    })
    .map(names);
  console.log(content);
};
compareProtein();

// function to list all the food items with lowest cab content to highest

const compareCarb = () => {
  const carbcontent = data
    .sort((a, b) => {
      return a.cab - b.cab;
    })
    .map(names);
  console.log(carbcontent);
};
compareCarb();
