require('./models/User');
require("./models/Event");
require('./services/passport');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const keys = require('./config/keys');
const express = require('express');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongooseURI, {useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 12 * 3600 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
eventRoutes(app);

const PORT = process.env.PORT || 5000;
  app.listen(PORT);