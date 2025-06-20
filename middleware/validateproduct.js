const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || price === undefined || !category || inStock === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  next();
};

module.exports = validateProduct;
