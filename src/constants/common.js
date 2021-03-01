'use strict';

const MAX_DIGIT = 9;
const DEFAULT_COMMAND = `--help`;
const DEFAULT_PORT = 3000;

const USER_ARGV_INDEX = 2;
const UTF8_ENCODING_FORMAT = `utf8`;
const HOME_PATH = `/`;
const NOT_FOUND_MESSAGE_TEXT = `Not found`;

const ExitCode = {
  error: 1,
  success: 0,
};

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};


module.exports = {
  MAX_DIGIT,
  DEFAULT_COMMAND,
  DEFAULT_PORT,
  USER_ARGV_INDEX,
  UTF8_ENCODING_FORMAT,
  HOME_PATH,
  NOT_FOUND_MESSAGE_TEXT,
  ExitCode,
  HttpCode,
};
