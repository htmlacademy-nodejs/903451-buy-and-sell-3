'use strict';

const {
  getRandomInt,
  shuffle,
  writeFile,
  stringifyContent
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
  writeFile,
  stringifyContent,
  createPictureFileName,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateOfferType,
  generateSum
};

