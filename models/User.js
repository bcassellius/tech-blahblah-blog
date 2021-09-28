const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User Model
class User extends Model {}

// Define table columns and configuration
User.init(
    {// TABLE COLUMN DEFINITIONS GO HERE
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
       
    },
    {//TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration)
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
  );

// export
module.exports = User;