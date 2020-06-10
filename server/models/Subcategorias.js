const Sequelize = require('sequelize');

const db = require('../config/database');

const subCategoria = db.define('subcategorias', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cat : {
        type: Sequelize.INTEGER
    },
    nom_scat : {
        type: Sequelize.STRING
    },
    desc_scat : {
        type: Sequelize.TEXT
    },
    img_scat : {
        type: Sequelize.STRING
    },
});

module.exports = subCategoria;