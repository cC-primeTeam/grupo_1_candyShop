'use strict';
const faker = require ('faker');

const products = [...Array(20)].map((products) => (
  {
    name: faker.commerce.productName(),
    detail: faker.random.words(10),
    top_check: "0",
    offer_discount: "0",
    price: faker.commerce.price(),
    image: faker.image.image(),
    category_id: "3",
    active: "1",
    created_at: new Date(),
    updated_at: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', products, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
};
