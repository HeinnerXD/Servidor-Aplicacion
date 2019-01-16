
-- datos para conectar a MySQL en ./src/keys.js

CREATE DATABASE sw;

USE sw;

CREATE TABLE sw_users(
    id INT(5) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE sw_users
    ADD PRIMARY KEY (id);

ALTER TABLE sw_users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE sw_users;

CREATE TABLE sw_products(
    id INT(5) NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    unitsavailable INT(10),
    price DOUBLE,
    dolarprice DOUBLE
);

ALTER TABLE sw_products
    ADD PRIMARY KEY (id);

ALTER TABLE sw_products
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE sw_products;

INSERT INTO sw_products VALUES (
	1524,
	"Huawei P8 lite",
	"Pantalla: 5, 720 x 1280 pixels - Procesador: Kirin 625 1.3GHz - RAM: 2GB",
	32,
	799000,
	25.51);

INSERT INTO sw_products VALUES (
	1825,
	"Cargador",
	"Carga Rápida 3 Fast 18w Usb Cargador De Pared Plegable De V",
	19,
	48900,
	25.51);

INSERT INTO sw_products VALUES (
	1715,
	"Iphone Funda",
	"Iphone 8 Funda Iphone 7 Funda Gatcepot Silicon Material Con",
	36,
	54900,
	17.53);

INSERT INTO sw_products VALUES (
	2545,
	"Tornillos",
	"Reemplazo Completo Del Conjunto De Tornillos Completo",
	46,
	54900,
	17.53);

INSERT INTO sw_products VALUES (
	2715,
	"Protector De Pantalla",
	"Iflash® Pack De 2 De Protector De Pantalla De Vidrio Templado",
	15,
	54990,
	17.53);

INSERT INTO sw_products VALUES (
	2875,
	"Controlador De Motor",
	"Robotdyn - Controlador De Motor Paso A Paso A4988",
	45,
	47990,
	15.32);

INSERT INTO sw_products VALUES (
	1468,
	"Cable Divisor",
	"Cable Divisor De Potencia De Ventilador Tx3 De 6 Pulgadas",
	29,
	52990,
	16.92);

INSERT INTO sw_products VALUES (
	1675,
	"Secadora ",
	"Secadora De Ropa Pelusa Vent Trampa Cepillo",
	17,
	60990,
	19,47);

INSERT INTO sw_products VALUES (
	1796,
	"Sensor",
	"Sensor De Humedad Secadora Lg Electronics 6500el3001a",
	48,
	67990,
	21.71);

INSERT INTO sw_products VALUES (
	2439,
	"Gafas",
	"Webdeals Retro - Estilo De La Vendimia Diseño Polarizado",
	37,
	69990,
	22.35);

INSERT INTO sw_products VALUES (
	1942,
	"Llavero",
	"Abrebotellas Del Llavero",
	24,
	48990,
	15.64);

INSERT INTO sw_products VALUES (
	1560,
	"Palanca de control",
	"Hiletgo Regulador Del Juego Modulo De Distribucion Palanca",
	60,
	54990,
	17.56);




