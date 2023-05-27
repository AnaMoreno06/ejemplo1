const mysqlConnection = require('../database');
const bcrypt = require('bcryptjs');

module.exports = {
    /* Agregar ejercicio */
    add : async(req, res, next) => {
        try {
            const {nombre} = req.body;
            const sql = 'INSERT INTO ejercicio(nombre) VALUES (?)';
            mysqlConnection.query(sql, [nombre], (err, rows, fields) => {
                if(!err){
                    res.status(200).json(rows[0]);        
                }else{
                    console.log(err);
                    res.status(500).send({
                        message: 'Ocurrió un error'
                    });
                }
            });
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    /* Obtener todos los ejercicios */
    get : async(req, res, next) => {
        try {
            mysqlConnection.query('SELECT * FROM ejercicio', (err, rows, fields) => {
                if(!err){
                    res.status(200).json(rows);        
                }else{
                    res.status(500).send({
                        message: 'Ocurrió un error'
                    });
                }
            });
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    /* Obtener ejercicio by Id */
    getEjercicioById : async(req, res, next) => {
        try {
            let {ejercicioId} = req.params;
            mysqlConnection.query('SELECT * FROM ejercicio WHERE id = ?', [ejercicioId], (err, rows, fields) => {
                if(!err){
                    res.status(200).json(rows[0]);        
                }else{
                    res.status(500).send({
                        message: 'Ocurrió un error'
                    });
                }
            });
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    /* Update ejercicio by Id */
    updateEjercicioById : async(req, res, next) => {
        try {
            const {ejercicioId} = req.params;
            const {nombre} = req.body;

            const sql = 'UPDATE ejercicio SET nombre = ? WHERE id = ?';
            mysqlConnection.query(sql, [nombre, ejercicioId], (err, rows, fields) => {
                if(!err){
                    res.status(200).json(rows[0]);        
                }else{
                    res.status(500).send({
                        message: 'Ocurrió un error'
                    });
                }
            });
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}