const verifyBlog = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const fields = [];
  fields.push(title, content, categoryIds);
  const fieldsUndefined = fields.every((field) => field !== undefined || field);
  if (!(fieldsUndefined)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const fieldsLengthZero = fields.every((field) => field.length !== 0);

  if (!(fieldsLengthZero)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

module.exports = { verifyBlog };
