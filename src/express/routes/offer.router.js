'use strict';

const {Router} = require(`express`);

const offerRouter = new Router();

offerRouter.get(`/category/:id`, (req, res) => res.send(`/offers/category/:id ${req.params.id}`));
offerRouter.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/:id ${req.params.id}`));
offerRouter.get(`/add`, (req, res) => res.send(`/offers/add`));
offerRouter.get(`/id`, (req, res) => res.send(`/offers/id`));
offerRouter.get(`/`, (req, res) => res.send(`/offers`));

module.exports = offerRouter;
