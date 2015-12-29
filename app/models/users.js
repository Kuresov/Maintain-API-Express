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
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });
  return User
}

