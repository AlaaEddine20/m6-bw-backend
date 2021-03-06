module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define(
    "experiences",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: { type: DataTypes.DATE, allowNull: true },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(500),
        allowNull: false,
        defaultValue: "http://placehold.it/50x50",
      }
    },
    { timestamps: true }
  );

  Experience.associate = (models) => {
    Experience.belongsTo(models.User);
  };
  return Experience;
};
