const mysqlConnection = require('../database');
const bcrypt = require('bcryptjs');

module.exports = {
    /* Agregar empleado */ 
    add : async(req, res, next) => {
        try {
            const {cedula, nombres, apellidos, correo, telefono} = req.body;
            const sql = 'INSERT INTO empleado(cedula, nombre, apellido, email, password, telefono, cargo_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
            const passwordBcrypt = await bcrypt.hash(toString(cedula), 10);
            const data = [cedula, nombres, apellidos, correo, passwordBcrypt, telefono, 2];
            mysqlConnection.query(sql, data, (err, rows, fields) => {
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
            console.error(e);
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    /* Obtner todos los entrenadores */ 
    get : async(req, res, next) => {
        try {
            mysqlConnection.query('SELECT * FROM empleado WHERE cargo_id = 2', (err, rows, fields) => {
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
    /* Obtener empleado por Id */
    getEntrenadorById : async(req, res, next) => {
        try {
            let {entrenadorId} = req.params;
            mysqlConnection.query('SELECT * FROM empleado WHERE id = ? && cargo_id = 2', [entrenadorId], (err, rows, fields) => {
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
    /* Actualiza datos del empleado */
    updateEntrenadorById : async(req, res, next) => {
        try {
            const {entrenadorId} = req.params;
            const {cedula, nombre, apellido, email, telefono} = req.body;
            const sql = 'UPDATE empleado SET cedula = ?, nombre = ?, apellido = ?, email = ?, telefono = ? WHERE id = ?';
            const data = [cedula, nombre, apellido, email, telefono, entrenadorId];
            mysqlConnection.query(sql, data, (err, rows, fields) => {
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
    /* Eliminar empleado */
    deleteEntrenadorById : async(req, res, next) => {
        try {
            const {entrenadorId} = req.params;
            mysqlConnection.query('DELETE FROM empleado WHERE id = ?', entrenadorId, (err, rows, fields) => {
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