// Dependencies
    import Sequelize from "sequelize";
    import dbConfig from "../config/database";
    import Models from "../models";

// Connection
    const connection = new Sequelize(dbConfig);

// Init
    Models.init(connection);

// Models Params
    Models.associate(connection.models);

// Exports
    module.exports = connection;
//