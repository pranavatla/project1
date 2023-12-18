let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture', function (req, res) {
    let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
});

// MongoDB URL and options
const mongoUrlLocal = "mongodb://admin:password@localhost:27017";
const mongoUrlDocker = "mongodb://admin:password@mongodb";
const mongoUrl = process.env.DOCKER_ENV ? mongoUrlDocker : mongoUrlLocal;
const mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const databaseName = process.env.DATABASE_NAME || "my-db";

// Insert a new profile
app.post('/update-profile', function (req, res) {
    let userObj = req.body;

    MongoClient.connect(mongoUrl, mongoClientOptions, function (err, client) {
        if (err) throw err;

        let db = client.db(databaseName);

        db.collection("users").insertOne(userObj, function(err, response) {
            if (err) throw err;
            client.close();
            res.send(response.ops[0]); // Send back the inserted document
        });
    });
});

// Get all profiles
app.get('/get-profile', function (req, res) {

    MongoClient.connect(mongoUrl, mongoClientOptions, function (err, client) {
        if (err) throw err;

        let db = client.db(databaseName);

        db.collection("users").find({}).toArray(function (err, result) {
            if (err) throw err;
            client.close();

            res.send(result); // Send all the user profiles
        });
    });
});

app.listen(3000, function () {
    console.log("app listening on port 3000!");
});
