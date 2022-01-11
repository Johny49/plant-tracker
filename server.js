const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helper = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 's',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db:sequelize,
    }),
};

app.use(session(sess));
const hbs = exphbs.create({});

app.engine('handlers', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({force: false}).then(() =>{
    app.listen(PORT, ()=> console.log('Now listening'));
});