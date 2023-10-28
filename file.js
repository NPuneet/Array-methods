const data = require("./food.json");

// function to list all the food items
const listAll = () => {
  const items = data.map((food) => food.foodname);
  console.log(items);
};
listAll();

// function to list all the food items with category vegetables
const vegetables = () => {
  const filteredVeggies = data
    .filter((food) => food.category === "Vegetable")
    .map((food) => food.foodname);
  console.log(filteredVeggies);
};
vegetables();

// function to list all the food items with category fruit

const fruits = () => {
  const filteredFruits = data
    .filter((food) => food.category === "Fruit")
    .map((food) => food.foodname);
  console.log(filteredFruits);
};
fruits();

// function to list all the food items with category protien

const protien = () => {
  const filteredProtein = data
    .filter((food) => food.category === "Protein")
    .map((food) => food.foodname);
  console.log(filteredProtein);
};
protien();

// function to list all the food items with category nuts

const nuts = () => {
  const filteredNuts = data
    .filter((food) => food.category === "Nuts")
    .map((food) => food.foodname);
  console.log(filteredNuts);
};
nuts();

// function to list all the food items with category grains

const grain = () => {
  const filteredGrains = data
    .filter((food) => food.category === "Grain")
    .map((food) => food.foodname);
  console.log(filteredGrains);
};
grain();

// function to list all the food items with category dairy

const dairy = () => {
  const filteredDairy = data
    .filter((food) => food.category === "Dairy")
    .map((food) => food.foodname);
  console.log(filteredDairy);
};
dairy();

// function to list all the food items with calorie above 100

const calorieDense = () => {
  const dense = data
    .filter((food) => food.calorie > 100)
    .map((food) => food.foodname);
  console.log(dense);
};
calorieDense();

// function to list all the food items with calorie below 100

const lowCalorie = () => {
  const low = data
    .filter((food) => food.calorie < 100)
    .map((food) => food.foodname);
  console.log(low);
};
lowCalorie();

// function to list all the food items with highest protien content to lowest

const compareProtein = () => {
  const content = data
    .sort((a, b) => {
      return b.protiens - a.protiens;
    })
    .map((food) => food.foodname);
  console.log(content);
};
compareProtein();

// function to list all the food items with lowest cab content to highest

const compareCarb = () => {
  const carbcontent = data
    .sort((a, b) => {
      return a.cab - b.cab;
    })
    .map((food) => food.foodname);

  console.log(carbcontent);
};
compareCarb();
