const express = require ('express')   //file js untuk pake express
const { Pool, Connection } = require('pg')
const pool = require("./connection")
const cors = require('cors')
const app = express() // buat servernys 
const port = 3000 // define port

// permission
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! welcome to the world s')  //semacam url dan endpoint
})

app.get('/foods', async (request, response) => {
    try {
        const data = await pool.query('SELECT * FROM Foods');
        let dataFoods = data.rows;
        response.json(dataFoods);
    } catch (error) {
        console.log("Error:", error.message);  // Log the error message
        response.status(500).json({ message: "Internal server error", error: error.message });
    }
});

app.get('/foods/:id', async (request, response) => {
    try {
        const data = await pool.query(`SELECT * FROM Foods WHERE id = ${request.params.id}`);
        let dataFoods = data.rows[0];
        if (!dataFoods) {
            response.status(404).json({ message: "Data Not Found" });
          } else {
            response.json(dataFoods);
          }
    } catch (error) {
        console.log("Error:", error.message);  // Log the error message
        response.status(500).json({ message: "Internal server error", error: error.message });
    }
});

// menjalankan express di port tadi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

