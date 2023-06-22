const pool = require('../sql/connection')


//list all users
const list = (req, res) => {
  pool.query('SELECT * FROM ??', ["users"], (err, rows, fields) => {
    res.json(rows)
  })
}

//show one user
const show = (req, res) => {
  const { id } = req.params
  pool.query(`SELECT * FROM ?? WHERE ?? = ?`, ["users", "id", id], (err, row, fields) => {
    res.json(row)
  })
}

//create one user
const create = (req, res) => {
  const {body} = req
  const {first_name, last_name} = body
  pool.query(`INSERT INTO ?? (??, ??) VALUES (?, ?)`, ["users", "first_name", "last_name", first_name, last_name], (err, row, fields) => {
    console.log(row)
    res.json(row)
  })
}

//update one user
const update = (req, res) => {
  const {id} = req.params
  const {body} = req
  pool.query(`UPDATE ?? SET ? WHERE ?? = ?`, ["users", body, "id", id], (err, row, fields) => {
    console.log(row, fields)
    res.json(row.info)
  })
}

//delete one user
const deleteUser = (req, res) => {
  const {id} = req.params
  pool.query(`DELETE FROM ?? WHERE ?? = ?`, ["users", "id", id], (err, row, fields) => {
    res.json(row)
  })
}

module.exports = {
  list,
  show,
  create,
  update,
  deleteUser
}