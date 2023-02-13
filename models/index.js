// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_name',
 }); 

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_name',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved (tags associated with that product)
  as: 'product_tags'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved (products associated with that tag)
  as: 'tag_products'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
