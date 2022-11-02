const pool = require('../config/database')
const queries = require('../queries/queries')

const getStudents = (req, res) => {
    pool.query(queries.queryGetStudents, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows)
    })
}

const getStudentsById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.queryGetStudentsById, [id], (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows)
    })
}

const addStudents = (req, res) => {
    const [name, email, age, birthday] = req.body  
    //Checking if the email exists
    
    pool.query(queries.queryCheckEmail, [email], (err, result) =>{
        if(result.rows.length) {
            res.send('Email already exists')
        }

        pool.query(queries.queryAddStudent, [name, email, age, birthday], (err, result) =>{
            if(err) throw err;
            res.status(201).send('Student created successfully !')

        })
    })
}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.queryGetStudentsById, [id], (error, result) => {
        const noStudent = !result.rows.length;
        if (noStudent){
            res.send("Student doen't exist")

        }
        pool.query(queries.queryDeleteStudent, [id], (error, result) => {
            if (error) throw error;
            res.status(200).send("Students removed successfully");
        })
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.queryGetStudentsById, [id], (error, result) => {
        const noStudent = !result.rows.length;
        if (noStudent){
            res.send("Student doen't exist")

        }
        pool.query(queries.queryUpdateStudent, [name, id], (error, result) => {
            if (error) throw error;
            res.status(200).send("Student updated successfully");
        })
    })
}



module.exports = {
    getStudents,
    getStudentsById,
    addStudents,
    deleteStudent,
    updateStudent,
}