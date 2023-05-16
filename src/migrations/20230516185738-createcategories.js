'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
    },{timestamps : false } );  // ele faz o impsimento do uso createdAt e UpdatadAt
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('categories');
  }
};
