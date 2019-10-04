export default (sequelize, dataTypes) => {
  return sequelize.define('boards', // table name
  {
    idx: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: dataTypes.STRING,
      allowNull: false
    }
  },
  {
      timestamps: false
  });
}