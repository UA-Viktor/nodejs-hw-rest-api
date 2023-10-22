const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      let errorMessage;
      if (req.method === "POST") {
        errorMessage = "missing required name field";
      } else if (req.method === "PUT") {
        errorMessage = "missing fields";
      }
      next(HttpError(400, errorMessage));
    } else {
      next();
    }
  };
  return func;
};

module.exports = validateBody;
