const mysqlConnection = require('../database');
const bcrypt = require('bcryptjs');

module.exports = {
    add : async(req, res, next) => {
        try {
            const {cedula, nombres, apellidos, correo, telefono, peso, altura, imc, entrenador} = req.body;
            const sql = 'INSERT INTO cliente(cedula, nombre, apellido, email, password, telefono, peso, altura, imc, empleado_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const passwordBcrypt = await bcrypt.hash(toString(cedula), 10);
            const data = [cedula, nombres, apellidos, correo, passwordBcrypt, telefono, peso, altura, imc, entrenador];
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
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    get : async(req, res, next) => {
        try {
            mysqlConnection.query('SELECT * FROM cliente', (err, rows, fields) => {
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

    getClienteById : async(req, res, next) => {
        try {
            let {clienteId} = req.params;
            mysqlConnection.query('SELECT * FROM cliente WHERE id = ?', [clienteId], (err, rows, fields) => {
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

    updateClienteById : async(req, res, next) => {
        try {
            const {clienteId} = req.params;
            const {cedula, nombre, apellido, email, telefono, peso, altura, imc, entrenador} = req.body;
            const sql = 'UPDATE cliente SET cedula = ?, nombre = ?, apellido = ?, email = ?, telefono = ?, peso = ?, altura = ?, imc = ?, empleado_id = ? WHERE id = ?';
            const data = [cedula, nombre, apellido, email, telefono, peso, altura, imc, entrenador, clienteId];
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
            console.log(e);
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },

    login: async(req, res, next) => {
        try {
            console.log('HOLA');
            const {email, password} = req.body; 
            mysqlConnection.query('SELECT * FROM cliente WHERE email = ?', [email], (err, rows, fields) => {
                if(!err){
                    let cliente = rows[0];
                    if( cliente ){
                        bcrypt.compare( password, cliente.password, function(err, result) {
                            if(result){
                                res.status(200).json(cliente);
                            }else{
                                console.log(err);
                                res.status(500).send({
                                    message: 'Contraseña incorrecta'
                                });
                            }
                        });
                        console.log('Password: ' + password + ' password2: ' + cliente.password + ' - ');
                    
                    }else{
                        res.status(500).send({
                            message: 'Email incorrecto'
                        });
                    }
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