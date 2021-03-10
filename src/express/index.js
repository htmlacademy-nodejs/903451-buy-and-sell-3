'use strict';

const express = require(`express`);
const path = require(`path`);

const {FRONT_CLIENT_PORT, PUBLIC_DIR, TEMPLATES_DIR} = require(`../constants`);
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/my-routes`);
const offersRoutes = require(`./routes/offers-routes`);


const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, TEMPLATES_DIR));
app.set(`view engine`, `pug`);

app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.listen(FRONT_CLIENT_PORT);
