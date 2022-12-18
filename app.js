const express = require('express')
const app = express()
const port = 3000
const mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dlabrada',
  password : 'D26y12an@',
  database : 'cloudtek'
});
 
connection.connect();
 
connection.query('SELECT * FROM user', function (error, results, fields) {
  try {
    if (error) throw error;
    console.log('The solution is: ', results[0]);
    
  } catch (error) {
    console.log(error)
  }
 
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})