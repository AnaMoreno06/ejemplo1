const mysqlConnection = require('../database');
const bcrypt = require('bcryptjs');

module.exports = {
    
    getEmpleadoById: async(req, res, next) => {
        try {
            let {empleadoId} = req.params;
            mysqlConnection.query('SELECT * FROM empleado WHERE id = ?', [empleadoId],  (err, rows, fields) => {
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
    /* login administrador */ 
    login: async(req, res, next) => {
        try {
            const {email, password} = req.body; 
            mysqlConnection.query('SELECT * FROM empleado WHERE email = ?', [email], (err, rows, fields) => {
                if(!err){
                    let empleado = rows[0];
                    if(empleado){
                        const verified = bcrypt.compareSync( password, empleado.password );
                        if( verified ){
                            res.status(200).json(empleado);
                        }else{
                            res.status(500).send({
                                message: 'Contraseña incorrecta'
                            });
                        }
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