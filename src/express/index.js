'use strict';

const express = require(`express`);
const {FRONT_CLIENT_PORT} = require(`../constants`);
const mainRouter = require(`./routes/main.router`);
const myRouter = require(`./routes/my.router`);
const offerRouter = require(`./routes/offer.router`);


const app = express();

app.use(`/offers`, offerRouter);
app.use(`/my`, myRouter);
app.use(`/`, mainRouter);

app.listen(FRONT_CLIENT_PORT);
