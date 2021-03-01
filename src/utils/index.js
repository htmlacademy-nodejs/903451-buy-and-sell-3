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

const {sendResponse} = require(`./server`);

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
  generateSum,
  sendResponse,
};

