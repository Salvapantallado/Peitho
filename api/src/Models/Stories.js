const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"stories",
		{
			url: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			type: {
				type: DataTypes.TEXT,
			}
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
