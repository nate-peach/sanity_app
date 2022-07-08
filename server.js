const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient


MongoClient.connect(connectionString, (err, client) => {
  'mongodb+srv://<natepeach>:<717ChulaVistaWay>@sanity-app.nhg4sln.mongodb.net/?retryWrites=true&w=majority'
})

MongoClient.connect(connectionString, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
})

app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function() {
    console.log('listening on 3000')
  })

console.log('Node is the path to enlightenment')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

app.post('/quotes', (req, res) => {
    console.log(req.body)
  })