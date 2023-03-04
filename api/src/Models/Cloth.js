const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"cloth",
		{
			cloth_type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.ARRAY(DataTypes.TEXT),
				allowNull: true,
			},
		},
		{
			// timestamps: false,
			freezeTableName: true,
		}
	);
};
