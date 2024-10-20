const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const announcementRoute = require('./routes/announcements.route.js');
const quizRoute = require('./routes/quiz.route.js');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

const app = express();
const port = 8080;

// i18n
i18next
  .use(Backend)                     
  .use(middleware.LanguageDetector) 
  .init({
    backend: {
      loadPath: path.join(process.cwd(), 'src/locales', '{{lng}}', '{{ns}}.json'), 
    },
    detection: {
      order: ['querystring', 'cookie'], 
      caches: ['cookie'],               
    },
    fallbackLng: 'en',                   
    preload: ['en', 'fr', 'ar'],               
  });

// Middleware
app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use(middleware.handle(i18next));

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