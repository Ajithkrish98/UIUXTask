module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("products", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: { type: Sequelize.STRING, allowNull: true },
    sku: { type: Sequelize.STRING, allowNull: true },
    review: { type: Sequelize.INTEGER, allowNull: true },
    price: { type: Sequelize.INTEGER, allowNull: true },
    old_price: { type: Sequelize.INTEGER, allowNull: true },
    currency_type:{ type: Sequelize.INTEGER, allowNull: true ,comment: "0 - $, 1 - RS"},
    type: { type: Sequelize.INTEGER, allowNull: true,comment: "0 - Power Tools,1-Hand Tools,2-Plumbing"},
    category: { type: Sequelize.INTEGER, allowNull: true,comment: "0 - Top Rated,1-SpecialOffers,2-BestSellers" },
    image: { type: Sequelize.STRING, allowNull: true },
    is_active: { type: Sequelize.INTEGER, defaultValue: 0, comment: "0 - Active, 1 - DeActivate" },
  });

  return User;
};