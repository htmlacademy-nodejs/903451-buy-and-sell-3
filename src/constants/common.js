'use strict';

const MAX_DIGIT = 9;
const DEFAULT_COMMAND = `--help`;

const USER_ARGV_INDEX = 2;
const UTF8_ENCODING_FORMAT = `utf8`;

const ExitCode = {
  error: 1,
  success: 0,
};

module.exports = {
  MAX_DIGIT,
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  UTF8_ENCODING_FORMAT,
  ExitCode,
};

