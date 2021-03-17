'use strict';

const {Router} = require(`express`);

const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => res.render(`main`));
mainRouter.get(`/register`, (req, res) => res.render(`signup`));
mainRouter.get(`/login`, (req, res) => res.render(`login`));
mainRouter.get(`/search`, (req, res) => res.render(`search-result`));


module.exports = mainRouter;
