const products = [
	// tops
	// {
	// 	name: "Remera manga larga Stripes",
	// 	description:
	// 		"Hecha en modal con lycra estampada. Es muy linda calidad y abrigadita 🖤",
	// 	price: 2000,
	// 	description2: "",
	// 	price2: 0,
	// 	category: ["tops"],
	// 	image: "/ProductImages/Remera-Stripes.jpg",
	// },
	{
		name: "Top microtul",
		description:
			"Hecho en microtul elastizado! Hay muchos colores disponibles y estampados también 🔥🔥",
		price: 2300,
		description2: "Precio Liso $2300, Precio Estampado $3100",
		price2: 0,
		category: ["tops"],
		image: ["/ProductImages/Top-microtul.jfif", "/ProductImages/Falda-media-campana.jpg"],
		product_qty: 1,
		extra: "peitho"
	},

	// polleras
	{
		name: "Falda media campana",
		description:
			"Hechas en fibrana previamente lavadas. Tienen mucho movimiento y una caída hermosa 🌿 La cintura es elastizada. Puede hacerse en otras telas y cualquier medida!",
		price: 1850,
		description2: "También puede hacerse largo midi",
		price2: 2550,
		category: ["faldas"],
		image: ["/ProductImages/Falda-media-campana.jpg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Falda Bailarina",
		description:
			"Hecha en fibrana, tiene la cintura elastizada! Aparte de hermosa es muy cómoda 🌿",
		price: 2650,
		description2: "Puede hacerse en cualquier talle! Preguntar por otros colores y estampas 🥰",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Bailarina.jpg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Falda Cuadrille",
		description:
			"Está está hecha en gabardina, corte clásico al cuerpo. Tiene un cierre lateral ❤️",
		price: 2850,
		description2: "Se hace por talle, con el largo que deseen!",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-cuadrille.jfif"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Falda Lea",
		description:
			"Hecha en gabardina elastizada, se abotona por el frente izquierdo, del lado derecho tiene un bolsillo 🖤",
		price: 2800,
		description2: "Se hace a medida! Puede hacerse en otras telas ✨",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Lea.jfif"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Falda tableada",
		description:
			"Hecha en gabardina! Se hace a medida 🌿",
		price: 1850,
		description2: "Una prenda que queda bien con todo!",
		price2: 2550,
		category: ["faldas"],
		image: ["/ProductImages/Falda-tableada.jpg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Falda Cutie",
		description:
			"Falda semi tableada hecha en gabardina! 🐼 Es preciosísima y muy delicada! Puede hacerse también en negro!",
		price: 3500,
		description2: "",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-cute.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Pollera Evasé",
		description:
			"Faldas evasé, largo midi y corta! Ambas hechas en fibrana de algodón previamente lavadas. La falda midi tiene recortes en los laterales. Tienen mucho movimiento y una caída hermosa ❤️ La cintura es elastizada",
		price: 2550,
		description2: "⚠️Estampado no disponible! Puede hacerse en otras telas y cualquier medida!",
		price2: 1850,
		category: ["faldas"],
		image: ["/ProductImages/Pollera-Evasé.jpg"],
		product_qty: 1,
		extra: "peitho"
	},

	// vestidos
	{
		name: "Vestido Rosie",
		description:
			"Hecho en fibrana! Con doble frunce frontal que llega hasta el bajo busto, y otro frunce en el busto 🖤 Se puede usar con las mangas arriba o caídas. Se hace a medida y en otras estampas 🌿",
		price: 3500,
		description2: "",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Rosie.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Vestido San Valentín Otoño",
		description: "Hecho a mano y a medida en fibrana!",
		price: 4700,
		description2: "",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Otoño.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Vestido Panda",
		description: "Hecho en una combinación de gabardina elastizada y fibrana (es una sola pieza, la parte blanca y negra están unidas). Tiene pinzas por el frente y por la espalda. Las tiras son ajustables con tres ojales metálicos por lado, más cinturón en el bajo busto también ajustable 🌿",
		price: 4900,
		description2: "",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Panda.jpg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Vestido San Valentín",
		description: "Hecho en fibrana, tiene una caída preciosa con mucho peso por la cantidad de tela en las capas. Realmente no se llega a apreciar la calidad en fotos 🌿 (Al ser elastizado abarca muchos talles, elastiza un montón)",
		price: 4400,
		description2: "",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-SanValentin.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Vestido Victoria",
		description: "Hecho en gabardina (semi rígida). Tiene tablas encontradas en el frente y en la espalda, van desde el bajo busto hasta debajo de la cintura 💖 Tiene cierre por la espalda y unas mangas abullonadas en el puño!",
		price: 4700,
		description2: "",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Victoria.jfif"],
		product_qty: 1,
		extra: "peithoCute"
	},

	// pantalones
	{
		name: "Pantalón Cargo desmontable",
		description:
			"Hecho en gabardina elastizada, los talles son amplios. Tiene la ventaja de que se puede desarmar y sacar la parte de abajo, quedandote un short clásico negro ❤️. Los tirantes se agregan con un botón que se encuentra en la parte interior del short!",
		price: 2000,
		description2: "",
		price2: 0,
		category: ["pantalones"],
		image: ["/ProductImages/Cargo.jpg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Pantalón Recto",
		description:
			"Este modelo está hecho en gabardina elastizada blanca y negra! Es corte recto/mom 🖤 Tiene pinzas y bolsillos delanteros y traseros!",
		price: 5500,
		description2: "",
		price2: 0,
		category: ["pantalones"],
		image: ["/ProductImages/Pantalon-recto.jfif"],
		product_qty: 1,
		extra: "peitho"
	},

	// abrigos
	// {
	// 	name: "Buzo Cadenas",
	// 	description:
	// 		"Hecho en algodón frizado! Con cadenas en la capucha y cierres a los lados 🖤",
	// 	price: 2460,
	// 	description2: "",
	// 	price2: 0,
	// 	category: ["abrigos"],
	// 	image: "/ProductImages/Cadenas.jpg",
	// },
	{
		name: "Campera Angus",
		description:
			"Hecha en corderoy bordo! Tiene dos bolsillos grandes 🖤 Con detalles en los hombros!",
		price: 4500,
		description2: "",
		price2: 0,
		category: ["abrigos"],
		image: ["/ProductImages/Campera-Angus.jfif"],
		product_qty: 1,
		extra: "peitho"
	},


	// camisas
	{
		name: "Camisa manga corta",
		description:
			"La textura de la tela es MUY linda y cómoda, y los colores son hermosos. Talle aprox M/L pueden pedir las medidas ❤️",
		price: 1500,
		description2: "",
		price2: 0,
		category: ["camisas"],
		image: ["/ProductImages/Camisa-corta.jpg", "/ProductImages/Campera-Angus.jfif", "/ProductImages/Cadenas.jpg", "/ProductImages/Pantalon-recto.jfif", "/ProductImages/Cargo.jpg", "/ProductImages/Camisa-corta.jpg"],
		product_qty: 1,
		extra: "peitho"
	},
];

module.exports = {
	products,
};
