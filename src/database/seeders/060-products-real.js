'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: "Chocolate biznike",
        detail: "Bloque Biznikke x 120gr.",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        price: 80,
        image: "ChocolateBiznike.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Alfajor bagley blanco triple",
        detail: "Alfajor Bagley Blanco 73.5gr X 1 Uni.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        price: 80,
        image: "Alfajorbagleyblancotriple.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Alfajor bon o bon",
        detail: "Alfajor Bon O Bon 40gr X 1 Uni.",
        top_check: 0,
        offer_check: 0,
        offer_discount: 0,
        price: 50,
        image: "Alfajorbonobon.jpg",
        category_id: 1,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Caramelos duros pico dulce",
        detail: "Bolsa de caramelos pico dulce duro x 450gr.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        price: 400,
        image: "Caramelosdurospicodulce.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Caramelos masticables sugus",
        detail: "Bolsa de Caramelos Sugus masticables x 700gr.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 50,
        price: 1000,
        image: "Caramelosmasticablessugus.jpg",
        category_id: 2,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Chocolate cadbury yogurt frutilla",
        detail: "Chocolate Cadbury Frutilla x27gr, caja x12u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 30,
        price: 1000,
        image: "Chocolatecadburyyogurtfrutilla.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Gomitas mogul ositos extreme",
        detail: "Gomitas acido y dulce mogul ositos extreme.",
        top_check: 1,
        offer_check: 0,
        offer_discount: 0,
        price: 50,
        image: "Gomitasmogulositosextreme.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Gomitas mogul tiburoncitos",
        detail: "Gomitas dulces mogul tiburoncitos.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 10,
        price: 50,
        image: "Gomitasmogultiburoncitos.jpg",
        category_id: 6,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Paraguita de chocolate felfort",
        detail: "Caja de chupetines Paraguita de chocolate felfort.",
        top_check: 1,
        offer_check: 1,
        offer_discount: 20,
        price: 1200,
        image: "Paraguitadechocolatefelfort.jpg",
        category_id: 3,
        active: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Galletitas saladix snack pizza",
        detail: "Galletitas saladix snack pizza x100gr, pack 6u.",
        top_check: 0,
        offer_check: 1,
        offer_discount: 15,
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
