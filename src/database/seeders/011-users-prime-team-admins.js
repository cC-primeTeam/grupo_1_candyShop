'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('users', [
      {
        id:1,
        email: "juanespinel@gmail.com",
        password: "$2b$10$6/7cIv1J/MllFRxXs5mVbO/FHbkoF.B1ekXL6j5AvCySenUaXhHji",
        adress: "Monroe 860",
        location: "CABA",
        municipality: 'CABA',
        province: "CABA",
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
        password: "$2b$10$wf5i0Eshrw8QvfL0l6fl5ufJhKNvBcH2OHYN1WBo.X67malsdAuD6",
        adress: "Monroe 860",
        location: "CABA",
        municipality: 'CABA',
        province: "Buenos Aires",
        postal_code: "C1428BKD",
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
        password: "$2b$10$2v7/ILfkXuxeCCJI8bb5m.OOv0hC2vMuXfLauk/YVrNmZ9oOh2roi",
        adress: "Monroe 860",
        location: "CABA",
        municipality: 'CABA',
        province: "Buenos Aires",
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
        password: "1234567890",
        adress: "Monroe 860",
        location: "CABA",
        municipality: 'CABA',
        province: "Buenos Aires",
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
