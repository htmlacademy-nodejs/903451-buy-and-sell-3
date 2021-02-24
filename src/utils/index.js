'use strict';

const {
  getRandomInt,
  shuffle,
  writeJSONFile,
  readUTF8Content,
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
  readUTF8Content,
  createPictureFileName,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateOfferType,
  generateSum
};

