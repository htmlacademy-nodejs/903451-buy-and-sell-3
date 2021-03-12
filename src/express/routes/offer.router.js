'use strict';

const {Router} = require(`express`);

const offerRouter = new Router();

offerRouter.get(`/category/:id`, (req, res) => res.render(`category`));
offerRouter.get(`/edit/:id`, (req, res) => res.render(`offers/ticket-edit`));
offerRouter.get(`/add`, (req, res) => res.render(`offers/new-ticket`));
offerRouter.get(`/:id`, (req, res) => res.render(`/offers/ticket`));

module.exports = offerRouter;
