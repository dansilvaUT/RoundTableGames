require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    authCtlr = require('./controllers/auth/authController'),
    gameCtlr = require('./controllers/games/gamesController'),
    tagCtlr = require('./controllers/tags/tagController'),
    { PORT, SESSION_SECRET, CONNECTION_STRING } = process.env,
    app = express();

//Middleware
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
}));

//Connect to DB
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('RoundTableReview DB connected');
}).catch(err => console.log(`DB Error ${err.message}`));

//Endpoints

//Auth
app.post('/api/register', authCtlr.register);
app.post('/api/login', authCtlr.login);
app.get('/api/auth/me', authCtlr.getUser);
app.get('/api/logout', authCtlr.logout);

//User

//Games
app.post('/api/game/add', gameCtlr.addGame);
app.get('/api/game/all', gameCtlr.getGames);
app.get('/api/game/:game_id', gameCtlr.getGame);

//Tags
app.post('/api/game/tags/add', tagCtlr.addTagsToGame);
app.get('/api/game/tags/getAll', tagCtlr.getTags);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));