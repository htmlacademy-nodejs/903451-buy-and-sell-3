'use strict';

const express = require(`express`);
const path = require(`path`);

const {FRONT_CLIENT_PORT, PUBLIC_DIR, TEMPLATES_DIR} = require(`../constants`);
const mainRouter = require(`./routes/main.router`);
const myRouter = require(`./routes/my.router`);
const offerRouter = require(`./routes/offer.router`);

const app = express();
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, TEMPLATES_DIR));
app.set(`view engine`, `pug`);

app.use((req, res) => res.status(400).render(`errors/404`));

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => res.status(500).render(`errors/500`));

app.use(`/offers`, offerRouter);
app.use(`/my`, myRouter);
app.use(`/`, mainRouter);

app.listen(FRONT_CLIENT_PORT);
