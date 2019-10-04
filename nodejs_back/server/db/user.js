export default (sequelize, dataTypes) => {
  return sequelize.define('users', // table name
  {
    idx: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: dataTypes.STRING,
      allowNull: false
    },
    pwd: {
      type: dataTypes.STRING,
      allowNull: false
    }
  },
  {
      timestamps: false
  });
}