const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const announcementRoute = require('./routes/announcements.route.js');
const quizRoute = require('./routes/quiz.route.js');

const app = express();
const port = 8080;

// Middleware
app.use(express.json())
app.use(cors({
    origin: '*'
}))

// Routes
app.use('/api/announcements', announcementRoute);
app.use('/api/quizes', quizRoute);

// add collection name to the string
mongoose.connect('mongodb+srv://ebrahimmohassan15:u2Oayu0xpMjuQKEm@coligodb.ap1ah.mongodb.net/coligo?retryWrites=true&w=majority&appName=ColigoDB')
.then(() => {
    console.log("Connected to db")
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
.catch(() => console.log("DB Connection failed"))