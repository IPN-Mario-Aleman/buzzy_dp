const Sequelize = require('sequelize');

const db = require('../config/database');

const Categoria = db.define('categoria',{
    nom_cat : {
        type: Sequelize.STRING
    },
    desc_cat : {
        type: Sequelize.TEXT
    },
    img_cat : {
        type: Sequelize.STRING
    },
});

module.exports = Categoria;