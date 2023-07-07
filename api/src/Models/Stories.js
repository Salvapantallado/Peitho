const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"stories",
		{
			url: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			// timestamps: false,
			freezeTableName: true,
		}
	);
};
