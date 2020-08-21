'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: "Chocolate Biznikke Nevado",
        detail: "Bloque Biznikke Nevado x 120gr.",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 80,
        image: "ChocolateBiznike.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Alfajor Bagley Blanco Triple",
        detail: "Alfajor Bagley Blanco 73.5gr X 1 Uni.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 80,
        image: "Alfajorbagleyblancotriple.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Alfajor Bon o Bon Chocolate",
        detail: "Alfajor Bon o Bon Arcor 40gr X 1 Uni.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 50,
        image: "Alfajorbonobon.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Caramelos Pico Dulce Duros",
        detail: "Bolsa de caramelos pico dulce duro x 450gr.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 400,
        image: "Caramelosdurospicodulce.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Caramelos Sugus Masticables",
        detail: "Bolsa de Caramelos Sugus masticables x 700gr.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 50,
        stock: 20,
        price: 1000,
        image: "Caramelosmasticablessugus.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Chocolate Cadbury Yogurt Frutilla",
        detail: "Chocolate Cadbury Frutilla x27gr, caja x12u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 30,
        stock: 20,
        price: 1000,
        image: "Chocolatecadburyyogurtfrutilla.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Gomitas Mogul Ositos Extreme",
        detail: "Gomitas acido y dulce mogul ositos extreme.",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        stock: 20,
        price: 50,
        image: "Gomitasmogulositosextreme.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Gomitas Mogul Tiburoncitos",
        detail: "Gomitas dulces mogul tiburoncitos.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        stock: 20,
        price: 50,
        image: "Gomitasmogultiburoncitos.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Paraguita de Chocolate Felfort",
        detail: "Caja de chupetines Paraguita de chocolate felfort.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        stock: 20,
        price: 1200,
        image: "Paraguitadechocolatefelfort.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Galletitas Saladix Snack Pizza",
        detail: "Galletitas saladix snack pizza x100gr, pack 6u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 15,
        stock: 20,
        price: 600,
        image: "Galletitassaladixsnackpizza.jpg",
        category_id: 5,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  }
};
