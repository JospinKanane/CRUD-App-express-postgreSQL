const queryGetStudents = "SELECT * FROM students"
const queryGetStudentsById = "SELECT * FROM students WHERE id = $1";
const queryAddStudent = "INSERT INTO students ('name', 'email', age, 'birthday') VALUES ('$1',$2,$3,$4)";
const queryCheckEmail = "SELECT s FROM students s WHERE s.email = $1";
const queryDeleteStudent = "DELETE FROM students WHERE id = $1";
const queryUpdateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
    queryGetStudents,
    queryGetStudentsById,
    queryAddStudent,
    queryCheckEmail,
    queryDeleteStudent,
    queryUpdateStudent
}