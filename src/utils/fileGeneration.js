'use strict';

const {getRandomInt, shuffle} = require(`./common`);
const {MAX_DIGIT} = require(`../constants`);

const createPictureFileName = (pictureNumber) => {
  return pictureNumber <= MAX_DIGIT ? `item0${pictureNumber}.jpg` : `item${pictureNumber}.jpg`;
};

const generateCategory = (categoriesList) => {
  return Array.of(categoriesList[getRandomInt(0, categoriesList.length - 1)]);
};

const generateDescription = (sentencesList, minCount, maxCount) => {
  return shuffle(sentencesList).slice(minCount, maxCount).join(` `);
};

const generatePictureName = (pictureMinNumber, pictureMaxNumber) => {
  return createPictureFileName(getRandomInt(pictureMinNumber, pictureMaxNumber));
};

const generateTitle = (titleList) => {
  return Array.of(titleList[getRandomInt(0, titleList.length - 1)]);
};

const generateOfferType = (offerType) => {
  return Object.keys(offerType)[Math.floor(Math.random() * Object.keys(offerType).length)];
};

const generateSum = (min, max) => {
  return getRandomInt(min, max);
};

module.exports = {
  createPictureFileName,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateOfferType,
  generateSum,
};
