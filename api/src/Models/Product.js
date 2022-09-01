const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"product",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			},
			image: {
				type: DataTypes.ARRAY(DataTypes.TEXT),
				allowNull: true,
			},
			description2: {
				type: DataTypes.TEXT,
			},
			price2: {
				type: DataTypes.DECIMAL,
			},
		},
		{
			// timestamps: false,
			freezeTableName: true,
		}
	);
};
