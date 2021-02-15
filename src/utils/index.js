'use strict';

const {
  getRandomInt,
  shuffle,
  writeJSONFile,
} = require(`./common`);

const {
  createPictureFileName,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateOfferType,
  generateSum
} = require(`./fileGeneration`);

module.exports = {
  getRandomInt,
  shuffle,
  writeJSONFile,
  createPictureFileName,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateOfferType,
  generateSum
};

