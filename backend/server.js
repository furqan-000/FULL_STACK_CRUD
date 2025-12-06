const express = require("express");
const cors = require("cors")
const mysql = require("mysql")
const app = express();


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

db.connect(err => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Successfully connected to the database.");
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM Users WHERE id = ?";
    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json({ message: "Error fetching user" });
        if (data.length === 0) return res.status(404).json({ message: "User not found" });
        return res.json(data[0]);
    });
});

//This is to GET all users from the database
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM Users";
    db.query(sql, (err, data) =>{
        if(err) return res.status(500).json({ message: "Error from server" });
        return res.json(data);
    });
});

// This is to GET the Publications with student info
app.get("/publications", (req, res) => {
    const sql = `SELECT Publications.*, Users.first_name, Users.last_name
                 FROM Publications
                 JOIN Users ON Publications.student_id = Users.id`;
    db.query(sql, (err, data) =>{
        if(err) return res.status(500).json({ message: "Error from server" });
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    // The frontend sends `firstname`, `lastname`, and `email`.
    const { firstname, lastname, email } = req.body;

    if (!firstname || !lastname || !email) {
        return res.status(400).json({ message: "Missing required fields: firstname, lastname, email" });
    }

    const sql = "INSERT INTO Users (`first_name`, `last_name`, `email`) VALUES (?)";
    const values = [
        firstname,
        lastname,
        email
    ];
    db.query(sql, [values], (err, result) => {
        if (err) return res.status(500).json({ message: "Error creating user", error: err });
        return res.status(201).json({ message: "User created successfully", insertId: result.insertId });
    });
});

app.put('/update/:id', (req, res) => {
    const { firstname, lastname, email } = req.body;
    const id = req.params.id;

    if (!firstname || !lastname || !email) {
        return res.status(400).json({ message: "Missing required fields: firstname, lastname, email" });
    }

    const sql = `
        UPDATE Users 
        SET (first_name, last_name, email) = (?) 
        WHERE id = ?
        `;
    const values = [[firstname,lastname, email], id];

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ message: "Error updating user", error: err });
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(201).json({ message: "User updated successfully", insertId: result.insertId });
    });
});

app.get("/", (req, res) => {
    res.json("Hello From Backend");
});

app.listen(8081, () => {
    console.log("Running... ")
});