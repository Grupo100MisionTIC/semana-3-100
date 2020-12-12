'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{

      name:'carlos',
      email:'ejemplo@gmail.com',
      password:'$2y$12$zz8zJOK3gQhNQ5kE/SuRlOQTKyCIDnZHXj7iSiZ2Zfx.EHH8lk01S',
      createdAt: new Date(),
      updatedAt: new Date()

    }]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', null, {});
    
  }
};
