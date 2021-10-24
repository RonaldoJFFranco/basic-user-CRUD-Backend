'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      cod: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
