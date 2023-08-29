const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"product",
		{
			name: {
				type: DataTypes.STRING,
				// allowNull: true,
			},
			description: {
				type: DataTypes.TEXT,
				// allowNull: true,
			},
			price: {
				type: DataTypes.DECIMAL,
				// allowNull: true,
			},
			image: {
				type: DataTypes.ARRAY(DataTypes.TEXT),
				// allowNull: true,
			},
			description2: {
				type: DataTypes.TEXT,
			},
			price2: {
				type: DataTypes.DECIMAL,
			},
			product_qty: {
				type: DataTypes.INTEGER,
			},
			extra: {
				type: DataTypes.TEXT,
			}
		},
		{
			// timestamps: false,
			freezeTableName: true,
		}
	);
};
