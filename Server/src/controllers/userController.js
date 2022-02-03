const { authService } = require("../services");
const { userModels } = require("../models");
const { userValidator } = require("../validators/index.js");
const { AlreadyExistsError, InvalidDataError } = require("../error-types");

const cookiesOptions = { httpOnly: true, maxAge: "3600000", sameSite: "lax" };
const cookiesOptions2 = { maxAge: "3600000", sameSite: "lax" };

const register = async (req, res, next) => {
  const { email } = req.body;
  let validationErrors = null;

  try {
    const existingUserWithEmail = await userModels.findByEmail(email);

    if (existingUserWithEmail)
      throw new AlreadyExistsError("Email Already Exists");
    validationErrors = userValidator.validate(req.body);
    if (validationErrors) throw new InvalidDataError("Invalid input");
    const { token } = await authService.register(req.body);

    res
      .cookie("login", token, cookiesOptions)
      .cookie("LoggedIn", true, cookiesOptions2)
      .json({ message: "Lets Drink" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { token, ...user } = await authService.login(req.body);
    res
      .cookie("login", token, cookiesOptions)
      .cookie("LoggedIn", true, cookiesOptions2)
      .json({ message: "Lets Drink" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const logout = async (_req, res, next) => {
  try {
    res
      .clearCookie("login")
      .clearCookie("LoggedIn")
      .json({ message: "logout" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { register, login, logout };
