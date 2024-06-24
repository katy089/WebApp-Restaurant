const { checkSchema } = require("express-validator");
const {
  validationErrorMessages,
} = require("../utils/validation-errors.values");
const {
  passwordValidOptions,
  userNameValidOptions,
} = require("./auth.validations");

const changePasswordValidation = checkSchema({
  password: {
    in: "body",
    trim: true,
    optional: true,
    custom: {
      options: (value, { req }) => value !== req.body.new_password,
      errorMessage: validationErrorMessages.samePassword,
    },
  },
  new_password: passwordValidOptions,
  new_password_confirm: {
    ...passwordValidOptions,
    custom: {
      options: (value, { req }) => value === req.body.new_password,
      errorMessage: validationErrorMessages.passwordMismatch,
    },
  },
});

const deleteUserValidation = checkSchema({
  password: passwordValidOptions,
});

const changeUserNameValidation = checkSchema({
  user_name: userNameValidOptions,
});

module.exports = { changePasswordValidation, deleteUserValidation };
