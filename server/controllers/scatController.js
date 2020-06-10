const pool = require('../database');

exports.scategoriasController = async (req, res)  =>{
    const publicaciones = await pool.query('SELECT publicaciones.id, publicaciones.id_user, publicaciones.id_cat, publicaciones.id_scat, publicaciones.titulo, publicaciones.descripcion, publicaciones.costo, publicaciones.img_1, publicaciones.img_2, publicaciones.img_3, publicaciones.img_4, publicaciones.img_5, usuarios.username, categorias.nom_cat, subcategorias.nom_scat FROM publicaciones INNER JOIN categorias ON publicaciones.id_cat = categorias.id INNER JOIN subcategorias ON publicaciones.id_scat = subcategorias.id AND categorias.id = subcategorias.id_cat INNER JOIN usuarios ON publicaciones.id_user = usuarios.id WHERE (categorias.nom_cat = ? and subcategorias.nom_scat = ? ) AND publicaciones.costo BETWEEN 1 AND 100', [req.params.cat, req.params.subcat]);
    const publicaciones1 = await pool.query('SELECT publicaciones.id, publicaciones.id_user, publicaciones.id_cat, publicaciones.id_scat, publicaciones.titulo, publicaciones.descripcion, publicaciones.costo, publicaciones.img_1, publicaciones.img_2, publicaciones.img_3, publicaciones.img_4, publicaciones.img_5, usuarios.username, categorias.nom_cat, subcategorias.nom_scat FROM publicaciones INNER JOIN categorias ON publicaciones.id_cat = categorias.id INNER JOIN subcategorias ON publicaciones.id_scat = subcategorias.id AND categorias.id = subcategorias.id_cat INNER JOIN usuarios ON publicaciones.id_user = usuarios.id WHERE (categorias.nom_cat = ? and subcategorias.nom_scat = ? ) AND publicaciones.costo BETWEEN 101 AND 1000', [req.params.cat, req.params.subcat]);
    const publicaciones2 = await pool.query('SELECT publicaciones.id, publicaciones.id_user, publicaciones.id_cat, publicaciones.id_scat, publicaciones.titulo, publicaciones.descripcion, publicaciones.costo, publicaciones.img_1, publicaciones.img_2, publicaciones.img_3, publicaciones.img_4, publicaciones.img_5, usuarios.username, categorias.nom_cat, subcategorias.nom_scat FROM publicaciones INNER JOIN categorias ON publicaciones.id_cat = categorias.id INNER JOIN subcategorias ON publicaciones.id_scat = subcategorias.id AND categorias.id = subcategorias.id_cat INNER JOIN usuarios ON publicaciones.id_user = usuarios.id WHERE (categorias.nom_cat = ? and subcategorias.nom_scat = ? ) AND publicaciones.costo > 1000', [req.params.cat, req.params.subcat]);
    /*console.log(req.params.cat);
    console.log(req.params.subcat);*/
    /*console.log(publicaciones);
    console.log(publicaciones1);
    console.log(publicaciones2);*/

    res.render('subcategorias/', {
        pagina: 'Publicaciones',
        publicaciones: publicaciones,
        publicaciones1: publicaciones1,
        publicaciones2: publicaciones2
    });
}