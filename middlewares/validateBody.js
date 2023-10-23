const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message)); // Добавьте return здесь
    }
    next(); // Этот вызов больше не будет выполнен, если есть ошибка валидации
  };

  return func;
};

module.exports = validateBody;
