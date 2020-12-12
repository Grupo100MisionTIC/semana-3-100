'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{

      name:'carlos',
      email:'ejemplo@gmail.com',
      password:'$2y$12$snVcOCv/B51gaCQpa9zHQe9YSYJW2MoplwLm2V1uuAdwYwksf6L/6',
      createdAt: new Date(),
      updatedAt: new Date()

    }]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', null, {});
    
  }
};
