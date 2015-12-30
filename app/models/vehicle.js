module.exports = function(sequelize, DataTypes) {
  var Vehicle = sequelize.define('vehicles', {
    kilometers: {
      type: DataTypes.INTEGER,
      field: 'kilometers'
    },
    brand: {
      type: DataTypes.STRING,
      field: 'brand'
    },
    model: {
      type: DataTypes.STRING,
      field: 'model'
    },
    year: {
      type: DataTypes.INTEGER,
      field: 'year'
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  });
  return Vehicle
}
