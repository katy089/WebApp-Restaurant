const { checkSchema } = require("express-validator");
const {
  validationErrorMessages,
} = require("../utils/validation-errors.values");

const passwordValidOptions = {
  in: "body",
  trim: true,
  notEmpty: { errorMessage: validationErrorMessages.notEmpty },
  isLength: {
    options: { min: 10, max: 24 },
    errorMessage: validationErrorMessages.lengthMinMax(10, 24),
  },
};

const emailValidOptions = {
  in: "body",
  trim: true,
  notEmpty: { errorMessage: validationErrorMessages.notEmpty },
  isEmail: { errorMessage: validationErrorMessages.isEmail },
  toLowerCase: true,
};

const userNameValidOptions = {
  in: "body",
  trim: true,
  notEmpty: { errorMessage: validationErrorMessages.notEmpty },
  isLength: {
    options: { min: 2, max: 24 },
    errorMessage: validationErrorMessages.lengthMinMax(2, 24),
  },
  matches: {
    options: /^[a-zA-Z0-9_]+$/,
    errorMessage: validationErrorMessages.general,
  },
};

const signInValidations = checkSchema({
  user_name: userNameValidOptions,
  email: emailValidOptions,
  password: passwordValidOptions,
});

const emailPassValidations = checkSchema({
  email: emailValidOptions,
  password: passwordValidOptions,
});

module.exports = {
  signInValidations,
  emailPassValidations,
  passwordValidOptions,
  userNameValidOptions
};
