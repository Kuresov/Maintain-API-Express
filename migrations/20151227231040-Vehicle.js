'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      kilometers: Sequelize.INTEGER,
      brand: Sequelize.STRING,
      model: Sequelize.STRING,
      year: Sequelize.INTEGER,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });   
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('vehicles');
  }
};
