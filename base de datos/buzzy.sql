CREATE DATABASE buzzy;

use buzzy;

-- tabla usuarios

CREATE TABLE usuarios(
    id int(11) NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombres VARCHAR(30) NOT NULL,
    apellidos VARCHAR(30) NOT NULL,
    email varchar(50) UNIQUE NOT NULL,
    fecha_nac varchar(50),
    sexo varchar(1),
    estatus boolean,
    cuenta_verificada boolean,
    vendedor_aut boolean,
    token varchar(6),
    avatar varchar(255),
    fecha_reg date
);

ALTER TABLE usuarios ADD PRIMARY KEY (id);
ALTER TABLE usuarios ADD descripcion varchar(255);

ALTER TABLE usuarios MODIFY username varchar(20) UNIQUE NOT NULL;
ALTER TABLE usuarios MODIFY email varchar(100) UNIQUE NOT NULL;

ALTER TABLE usuarios MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE INDEX idx_usuarios on usuarios(id);

DESCRIBE usuarios
--------
CREATE TABLE telefonos(
    id int(11) NOT NULL,
    id_user int(11) NOT NULL,
    telefono varchar(20) NOT NULL,
    CONSTRAINT fk_tel_user FOREIGN KEY (id_user) REFERENCES usuarios(id)
);

ALTER TABLE telefonos ADD PRIMARY KEY (id);

ALTER TABLE telefonos MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

-------
CREATE TABLE direcciones(
    id int(11) NOT NULL,
    id_user int(11) NOT NULL,
    direccion varchar(20) NOT NULL,
    CONSTRAINT fk_dir_user FOREIGN KEY (id_user) REFERENCES usuarios(id)
);

ALTER TABLE direcciones ADD PRIMARY KEY (id);

ALTER TABLE direcciones MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

---------
CREATE TABLE sesion(
    id int(11) NOT NULL,
    id_user int(11) NOT NULL,
    inicio_session datetime NOT NULL,
    cierre_session datetime,
    CONSTRAINT fk_log_user FOREIGN KEY (id_user) REFERENCES usuarios(id)
);

ALTER TABLE sesion ADD PRIMARY KEY (id);

ALTER TABLE sesion MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

--------
CREATE TABLE estudios(
    id int(11) NOT NULL,
    id_user int(11) NOT NULL,
    titulo varchar(20) NOT NULL,
    tiempo varchar(30) NOT NULL,
    origen varchar(80) NOT NULL,
    dominio varchar(50) NOT NULL,
    img_cer varchar(80),
    CONSTRAINT fk_est_user FOREIGN KEY (id_user) REFERENCES usuarios(id)
);
ALTER TABLE estudios ADD PRIMARY KEY (id);

ALTER TABLE estudios MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

-------------------------------------------------------------------------------------
-------------- tabla de los testimonios de los usuarios a la pagina -----------------
-------------------------------------------------------------------------------------

CREATE TABLE testimoniales(
    id int(11) NOT NULL,
    id_user int(11) NOT NULL,
    mensaje text NOT NULL,
    CONSTRAINT fk_tes_user FOREIGN KEY (id_user) REFERENCES usuarios(id)
);

ALTER TABLE testimoniales ADD PRIMARY KEY (id);

ALTER TABLE testimoniales MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

-------------------------------------------------------------------------------------
-------------------------------- tabla categorias -----------------------------------
-------------------------------------------------------------------------------------

CREATE TABLE categorias(
    id int(11) NOT NULL,
    nom_cat varchar(30) NOT NULL,
    desc_cat text NOT NULL,
    img_cat varchar(50) NOT NULL
);

ALTER TABLE categorias ADD PRIMARY KEY (id);

ALTER TABLE categorias MODIFY desc_cat text not null;

ALTER TABLE categorias MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE subcategorias(
    id int(11) NOT NULL,
    id_cat int(11) NOT NULL,
    nom_scat varchar(30) NOT NULL,
    desc_scat text NOT NULL,
    img_scat varchar(50) NOT NULL,
    CONSTRAINT fk_scat_cat FOREIGN KEY (id_cat) REFERENCES categorias (id)
);

ALTER TABLE subcategorias ADD PRIMARY KEY (id);

ALTER TABLE subcategorias MODIFY desc_scat text not null;

ALTER TABLE subcategorias MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;


-------------------------------------------------------------------------------------
--------------------------- tabla de las publicaciones ------------------------------
-------------------------------------------------------------------------------------

CREATE TABLE publicaciones(
    id int(11) NOT NULL,
    id_user int(11) NOT NULL,
    id_cat int(11) NOT NULL,
    id_scat int(11) NOT NULL,
    titulo varchar(40) NOT NULL,
    descripcion text NOT NULL,
    costo int(6) NOT NULL,
    img_1 varchar(100) not null,
    img_2 varchar(100),
    img_3 varchar(100),
    img_4 varchar(100),
    img_5 varchar(100),
    CONSTRAINT fk_pub_user FOREIGN KEY (id_user) REFERENCES usuarios(id),
    CONSTRAINT fk_cat_cat FOREIGN KEY (id_cat) REFERENCES categorias(id),
    CONSTRAINT fk_scat_scat FOREIGN KEY (id_scat) REFERENCES subcategorias(id)
);

ALTER TABLE publicaciones ADD PRIMARY KEY (id);

ALTER TABLE publicaciones MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

-------
CREATE TABLE calificacion(
    id int(11) NOT NULL,
    id_user int(11) NOT NULL,
    id_pub int(11) NOT NULL,
    rate int(1) NOT NULL,
    comentario varchar(250) NOT NULL,
    CONSTRAINT fk_cali_user FOREIGN KEY (id_user) REFERENCES usuarios (id),
    CONSTRAINT fk_cali_pub FOREIGN KEY (id_pub) REFERENCES publicaciones (id)
);

ALTER TABLE calificacion ADD PRIMARY KEY (id);

ALTER TABLE calificacion MODIFY id int(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;
