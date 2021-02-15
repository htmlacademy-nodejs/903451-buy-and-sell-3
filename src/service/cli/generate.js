'use strict';

const {
  writeJSONFile,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateOfferType,
  generateSum,
} = require(`../../utils`);

const {
  FILE_NAME,
  TITLES,
  SENTENCES,
  CATEGORIES,
  OfferType,
  SumRestrict,
  PictureRestrict,
  DescriptionRestrict,
} = require(`../../data`);

const {DEFAULT_COUNT, MAX_COUNT} = require(`../../constants`);


const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    category: generateCategory(CATEGORIES),
    description: generateDescription(SENTENCES, DescriptionRestrict.MIN, DescriptionRestrict.MAX),
    picture: generatePictureName(PictureRestrict.MIN, PictureRestrict.MAX),
    title: generateTitle(TITLES),
    type: generateOfferType(OfferType),
    sum: generateSum(SumRestrict.MIN, SumRestrict.MAX),
  }))
);


module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = generateOffers(countOffer);

    if (countOffer >= MAX_COUNT) {
      return console.info(`Not more than 1000 offers`);
    }

    return writeJSONFile(FILE_NAME, content);
  }
};
