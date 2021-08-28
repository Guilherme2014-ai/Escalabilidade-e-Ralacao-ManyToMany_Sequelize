const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    // Many to Many
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
  //this.belongsToMany("Taget Model" { foreignKey: "chave estrangeira na tabela Pivot(pivo)", through: "tabela pivot(pivo)", as: "name" });
  }
}

module.exports = User;