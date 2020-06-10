const subCategoria = require('../models/Subcategorias');
const Categoria = require('../models/Categorias');
const pool = require('../database');

exports.categoriasController = async (req, res)  =>{
    const cats = await pool.query('SELECT * FROM categorias INNER JOIN subcategorias ON categorias.id = subcategorias.id_cat WHERE categorias.nom_cat = ?', [req.params.cat]);
    console.log(cats);
    res.render('categorias/', {
        pagina: 'Categorias',
        cats: cats
    });
}