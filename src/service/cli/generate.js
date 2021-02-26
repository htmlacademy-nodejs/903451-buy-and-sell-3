'use strict';

const chalk = require(`chalk`);

const {
  writeJSONFile,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateOfferType,
  generateSum,
  readUTF8Content,
} = require(`../../utils`);

const {
  FILE_NAME,
  FILE_SENTENCES_PATH,
  FILE_TITLES_PATH,
  FILE_CATEGORIES_PATH,
  OfferType,
  SumRestrict,
  PictureRestrict,
  DescriptionRestrict,
  DEFAULT_COUNT,
  MAX_COUNT,
} = require(`../../constants`);

const generateOffers = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    category: generateCategory(categories),
    description: generateDescription(sentences, DescriptionRestrict.MIN, DescriptionRestrict.MAX),
    picture: generatePictureName(PictureRestrict.MIN, PictureRestrict.MAX),
    title: generateTitle(titles),
    type: generateOfferType(OfferType),
    sum: generateSum(SumRestrict.MIN, SumRestrict.MAX),
  }))
);


module.exports = {
  name: `--generate`,
  async run(args) {
    const [titles, categories, sentences] = await Promise.all([
      readUTF8Content(FILE_TITLES_PATH),
      readUTF8Content(FILE_CATEGORIES_PATH),
      readUTF8Content(FILE_SENTENCES_PATH),
    ]);

    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = generateOffers(countOffer, titles, categories, sentences);

    if (countOffer >= MAX_COUNT) {
      return console.error(chalk.red(`Not more than 1000 offers`));
    }

    return writeJSONFile(FILE_NAME, content);
  }
};
