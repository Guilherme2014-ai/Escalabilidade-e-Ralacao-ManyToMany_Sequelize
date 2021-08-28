const User = require('../models/User');
const Addresses = require('../models/Address');
const Techs = require('../models/Tech');
const { Op } = require('sequelize');

module.exports = {
  async show(req, res) {
    // Encontrar todos usuários que tem email que termina com @rocketseat.com.br
    // Desses usuários eu quero buscar todos que moram na rua "Rua Guilherme Gembala"
    // Desses usuários eu quero buscar as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      include: [
        {
          model: Addresses,
          as: 'addresses',

          where: {
            street: {
              [ Op.or ]: [ "Guilherme Gembala", "Jose Antunes" ] },
            /*
              // onde a rua e igual a "Bla Bla...", ou onde o numero seja igual a "Blo Blo..."
              
              [ Op.or ]: [
                { street: "Bla Bla..." },
                { number: "Blo Blo..." }
              ]
            */
          }
        },
        { model: Techs, as: "techs"}
      ]
    });

    return res.json(users);
  }
};