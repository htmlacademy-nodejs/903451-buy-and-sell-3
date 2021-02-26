'use strict';

const FILE_NAME = `mocks.json`;
const FILE_SENTENCES_PATH = `../data/sentences.txt`;
const FILE_TITLES_PATH = `../data/titles.txt`;
const FILE_CATEGORIES_PATH = `../data/categories.txt`;

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};


const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

const DescriptionRestrict = {
  MIN: 1,
  MAX: 5,
};

module.exports = {
  DEFAULT_COUNT,
  MAX_COUNT,
  FILE_NAME,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
  OfferType,
  SumRestrict,
  PictureRestrict,
  DescriptionRestrict,
};
