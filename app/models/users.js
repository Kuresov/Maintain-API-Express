module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    email: {
      type: DataTypes.STRING,
      field: 'email'
    },
    auth_token: {
      type: DataTypes.STRING,
      field: 'auth_token'
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  });
  return User
}

