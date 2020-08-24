'use strict';
const faker = require('faker');
const products = [...Array(10)].map((products) => (
  {
    name: faker.commerce.productName(4),
    detail: faker.random.words(4),
    top_check: 0,
    offer_check: 0,
    offer_discount: 0,
    stock: 20,
    price: faker.commerce.price(),
    image: 'no-image.jpg',
    category_id: 3,
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
