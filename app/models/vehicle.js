module.exports = function(sequelize, DataTypes) {
  var Vehicle = sequelize.define('Vehicle', {
    kilometers: {
      type: DataTypes.INTEGER,
      field: 'kilometers',
      allowNull: false,
      validate: {
        isInt: true
        //min: 0
      }
    },
    brand: {
      type: DataTypes.STRING,
      field: 'brand',
      allowNull: false,
      validate: {
        isAlpha: true
        //TODO: isIn [ [list_of_brands] ]
      }
    },
    model: {
      type: DataTypes.STRING,
      field: 'model',
      allowNull: false,
      validate: {
        isAlpha: true
        //TODO: isIn [ [list_of_models] ]. This would be more efficient if I could validate that it's in a VehicleModels object, dependent on the brand, instead of an array.
      }
    },
    year: {
      type: DataTypes.INTEGER,
      field: 'year',
      allowNull: false,
      validate: {
        isNumeric: true,
        isValidYear: function(year) {
          if(year <= 1900 || year >= 2050) {
            throw new Error('Invalid Year')
          }
        }
      }
    }
  }, {
    tableName: 'vehicles',
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    classMethods: {
      permittedParams: function() {
        return ['kilometers', 'brand', 'model', 'year'];
      }
    }
  });
  return Vehicle
}
