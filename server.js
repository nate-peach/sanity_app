const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://natepeach:8786@sanity-app.nhg4sln.mongodb.net/?retryWrites=true&w=majority', 
{useUnifiedTopology: true})
.then(client => {
  console.log('Connected to Database')
  const db = client.db('sanity-quotes')
  const quotesCollection = db.collection('quotes')
})
.catch(error => console.error(error))

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
    quotesCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
  })