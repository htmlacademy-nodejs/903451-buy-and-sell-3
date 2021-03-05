'use strict';

const express = require(`express`);
const {FRONT_CLIENT_PORT} = require(`../constants`);
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/my-routes`);
const offersRoutes = require(`./routes/offers-routes`);


const app = express();

app.use(`/offers`, offersRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.listen(FRONT_CLIENT_PORT);
