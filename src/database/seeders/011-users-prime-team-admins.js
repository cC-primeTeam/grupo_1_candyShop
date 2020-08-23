'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
      {
        id:1,
        email: "juanespinel@gmail.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Monroe 860",
        location: "Belgrano",
        municipality: 'CABA',
        province: "02",
        postal_code: "C1428BKD",
        telephone: "1152637400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00000000000",
        fiscal_condition_id: 1,
        image: "juanespinel@gmail.com.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:2,
        email: "tomas@consek.com.ar",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Monroe 860",
        location: "CABA",
        municipality: 'Ciudadela',
        province: "06",
        postal_code: "1702",
        telephone: "1130197729",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00000000000",
        fiscal_condition_id: 5,
        image: "tomas@consek.com.ar.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:3,
        email: "mica.lew@hotmail.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Monroe 860",
        location: "Belgrano",
        municipality: 'CABA',
        province: "02",
        postal_code: "C1428BKD",
        telephone: "1152637400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00000000000",
        fiscal_condition_id: 1,
        image: "mica.lew@hotmail.com.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:4,
        email: "frankie.fcandia@gmail.com",
        password: "$2b$10$ULBIm08dogS9RBGKDiQugOxkp2GWxwMRi7fuJ7IHahDz9J6/UCOMq",
        adress: "Monroe 860",
        location: "Belgrano",
        municipality: 'CABA',
        province: "02",
        postal_code: "C1428BKD",
        telephone: "1152637400",
        name_fantasy: "CandyShop",
        business_name: "CandyShop",
        cuit: "00000000000",
        fiscal_condition_id: 1,
        image: "no-image.jpg",
        admin: "1",
        active: "1",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
