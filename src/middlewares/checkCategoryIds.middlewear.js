const checkCategory = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const fields = [title, content, categoryIds];

  const missingFields = fields.filter((field) => !field || field.length === 0);
  if (missingFields.length > 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

 module.exports = { checkCategory };
