const mysqlConnection = require('../database');

module.exports = {
    /* Agregar test */
    add : async(req, res, next) => {
        try {
            const {nombre, tipo_id} = req.body;
            const sql = 'INSERT INTO test(nombre, tipo_id) VALUES (?, ?)';
            mysqlConnection.query(sql, [nombre, tipo_id], (err, rows, fields) => {
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
    addEjercicio : async(req, res, next) => {
        try {
            const {ejercicio_id, serie} = req.body;
            const test_id = req.params.testId;
            const sql = 'INSERT INTO test_has_ejercicio(test_id, ejercicio_id, serie) VALUES (?, ?, ?)';

            mysqlConnection.query(sql, [test_id, ejercicio_id, serie], (err, rows, fields) => {
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
    /* Obtener todos los test */
    get : async(req, res, next) => {
        try {
            mysqlConnection.query('SELECT t.id, t.nombre, t.tipo_id, tp.tipo AS tipo FROM test AS t JOIN tipo AS tp ON (t.tipo_id = tp.id)', (err, rows, fields) => {
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
    getEjercicio : async(req, res, next) => {
        try {
            const {testId} = req.params;
            mysqlConnection.query('SELECT e.nombre AS nombre , te.serie AS serie FROM test_has_ejercicio AS te JOIN ejercicio AS e ON (te.ejercicio_id = e.id) WHERE te.test_id = ?', [testId],(err, rows, fields) => {
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
    getTipos : async(req, res, next) => {
        try {
            mysqlConnection.query('SELECT * FROM tipo', (err, rows, fields) => {
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
    getTestById : async(req, res, next) => {
        try {
            let {testId} = req.params;
            mysqlConnection.query('SELECT * FROM test WHERE id = ?', [testId], (err, rows, fields) => {
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
    updateTestById : async(req, res, next) => {
        try {
            const {testId} = req.params;
            const {nombre, tipo_id} = req.body;

            const sql = 'UPDATE test SET nombre = ?, tipo_id = ? WHERE id = ?';
            mysqlConnection.query(sql, [nombre, tipo_id, testId], (err, rows, fields) => {
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