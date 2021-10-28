// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(Tag,{
  through:{
    model:ProductTag,
    unique:false,
  },
  as:'product_id'
})
Tag.belongsToMany(Product,{
  through:{
    model:ProductTag,
    unique:false,
  },
  as:'tag_id'
})
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
