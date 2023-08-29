const products = [
	{
		name: "Falda Midi Evasé",
		description:
			"Faldas evasé, largo midi y corta! Ambas hechas en fibrana de algodón previamente lavadas. La falda midi tiene recortes en los laterales. Tienen mucho movimiento y una caída hermosa ❤️ La cintura es elastizada",
		price: 5850,
		description2: "⚠️Estampado no disponible! Puede hacerse en otras telas y cualquier medida!",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Midi/Falda-Midi.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Top microtul",
		description:
			"Hecho en microtul elastizado! Hay muchos colores disponibles y estampados también 🔥🔥",
		price: 4800,
		description2: "Precio Liso $2300, Precio Estampado $3100",
		price2: 4450,
		category: ["tops"],
		image: ["/ProductImages/Tops-Microtul/Top-Microtul-1.jpeg", "/ProductImages/Tops-Microtul/Top-Microtul-2.jpeg", "/ProductImages/Tops-Microtul/Top-Microtul-3.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Falda Lea",
		description:
			"Hecha en gabardina elastizada, se abotona por el frente izquierdo, del lado derecho tiene un bolsillo 🖤",
		price: 5900,
		description2: "Se hace a medida! Puede hacerse en otras telas ✨",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Lea/Falda-Lea-1.jpeg", "/ProductImages/Falda-Lea/Falda-Lea-2.jpeg", "/ProductImages/Falda-Lea/Falda-Lea-3.jpeg", "/ProductImages/Falda-Lea/Falda-Lea-4.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Falda Media Campana",
		description:
			"Hechas en fibrana previamente lavadas. Tienen mucho movimiento y una caída hermosa 🌿 La cintura es elastizada. Puede hacerse en otras telas y cualquier medida!",
		price: 4650,
		description2: "También puede hacerse largo midi",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Media-Campana/Falda-Media-Campana-1.jpeg", "/ProductImages/Falda-Media-Campana/Falda-Media-Campana-2.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Camisa Unisex",
		description:
			"La textura de la tela es MUY linda y cómoda, y los colores son hermosos. Talle aprox M/L pueden pedir las medidas ❤️",
		price: 8040,
		description2: "Camisa tipo crop precio alternativo",
		price2: 7380,
		category: ["camisas"],
		image: ["/ProductImages/Camisa-Unisex/Camisa-Unisex-1.jpeg", "/ProductImages/Camisa-Unisex/Camisa-Unisex-2.jpeg", "/ProductImages/Camisa-Unisex/Camisa-Unisex-3.jpeg", "/ProductImages/Camisa-Unisex/Camisa-Unisex-4.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Falda Cuadrille",
		description:
			"Está está hecha en gabardina, corte clásico al cuerpo. Tiene un cierre lateral ❤️",
		price: 4850,
		description2: "Se hace por talle, con el largo que deseen!",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Cuadrille/Falda-Cuadrille.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Falda Cutie",
		description:
			"Falda semi tableada hecha en gabardina! 🐼 Es preciosísima y muy delicada! Puede hacerse también en negro!",
		price: 7800,
		description2: "",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Cutie/Falda-Cutie-1.jpeg", "/ProductImages/Falda-Cutie/Falda-Cutie-2.jpeg", "/ProductImages/Falda-Cutie/Falda-Cutie-3.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Vestido Panda",
		description: "Hecho en una combinación de gabardina elastizada y fibrana (es una sola pieza, la parte blanca y negra están unidas). Tiene pinzas por el frente y por la espalda. Las tiras son ajustables con tres ojales metálicos por lado, más cinturón en el bajo busto también ajustable 🌿",
		price: 8900,
		description2: "",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Panda/Vestido-Panda.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Falda Volados",
		description:
			"Descripcion falda volados",
		price: 4300,
		description2: "Falda Volados descripcion 2",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Volados/Falda-Volados-1.jpeg","/ProductImages/Falda-Volados/Falda-Volados-2.jpeg","/ProductImages/Falda-Volados/Falda-Volados-3.jpeg","/ProductImages/Falda-Volados/Falda-Volados-4.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Falda Tableada",
		description:
			"Hecha en gabardina! Se hace a medida 🌿",
		price: 8400,
		description2: "Una prenda que queda bien con todo!",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Tableada/Falda-Tableada.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Falda cuadrille elastizada",
		description:
			"Descripción falda cuadrille elastizada",
		price: 4700,
		description2: "Falda cuadrille elastizada descripción 2",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Cuadrille-Elastizada/Falda-Cuadrille-Elastizada-1.jpeg", "/ProductImages/Falda-Cuadrille-Elastizada/Falda-Cuadrille-Elastizada-2.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Remeras",
		description:
			"Descripción Remeras",
		price: 2800,
		description2: "Remeras descripción 2",
		price2: 0,
		category: ["tops"],
		image: ["/ProductImages/Remeras/Remeras-1.jpeg", "/ProductImages/Remeras/Remeras-2.jpeg", "/ProductImages/Remeras/Remeras-3.jpeg", "/ProductImages/Remeras/Remeras-4.jpeg", "/ProductImages/Remeras/Remeras-5.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Blusa Peter",
		description:
			"Descripción Blusa Peter",
		price: 4600,
		description2: "Blusa Peter descripción 2",
		price2: 0,
		category: ["tops"],
		image: ["/ProductImages/Blusa-Peter/Blusa-Peter-1.jpeg", "/ProductImages/Blusa-Peter/Blusa-Peter-2.jpeg", "/ProductImages/Blusa-Peter/Blusa-Peter-3.jpeg", "/ProductImages/Blusa-Peter/Blusa-Peter-4.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Falda Cindy Cuadrille",
		description:
			"Descripción Falda Cindy Cuadrille",
		price: 4650,
		description2: "Falda Cindy Cuadrille descripción 2",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Cindy-Cuadrille/Falda-Cindy-Cuadrille-1.jpeg", "/ProductImages/Falda-Cindy-Cuadrille/Falda-Cindy-Cuadrille-2.jpeg", "/ProductImages/Falda-Cindy-Cuadrille/Falda-Cindy-Cuadrille-3.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Falda Cindy Lana",
		description:
			"Descripción Falda Cindy Lana",
		price: 4950,
		description2: "Falda Cindy Lana descripción 2",
		price2: 0,
		category: ["faldas"],
		image: ["/ProductImages/Falda-Cindy-Lana/Falda-Cindy-Lana-1.jpeg", "/ProductImages/Falda-Cindy-Lana/Falda-Cindy-Lana-2.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Vestido Peter Lino",
		description:
			"Descripción Vestido Peter Lino",
		price: 8300,
		description2: "Vestido Peter Lino descripción 2",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Peter-Lino/Vestido-Peter-Lino-1.jpeg", "/ProductImages/Vestido-Peter-Lino/Vestido-Peter-Lino-2.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Vestido Básico Bengalina",
		description:
			"Descripción Vestido Básico Bengalina",
		price: 6400,
		description2: "Vestido Básico Bengalina descripción 2",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Básico-Bengalina/Vestido-Básico-Bengalina-1.jpeg", "/ProductImages/Vestido-Básico-Bengalina/Vestido-Básico-Bengalina-2.jpeg", "/ProductImages/Vestido-Básico-Bengalina/Vestido-Básico-Bengalina-3.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Top microtul ángeles",
		description:
			"Descripción Top microtul ángeles",
		price: 4800,
		description2: "Top microtul ángeles descripción 2",
		price2: 4450,
		category: ["tops"],
		image: ["/ProductImages/Tops-Microtul/Top-Microtul-Angeles.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Top microtul astral",
		description:
			"Descripción Top microtul astral",
		price: 4800,
		description2: "Top microtul astral descripción 2",
		price2: 4450,
		category: ["tops"],
		image: ["/ProductImages/Tops-Microtul/Top-Microtul-Astral.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Top microtul dragones",
		description:
			"Descripción Top microtul dragones",
		price: 4800,
		description2: "Top microtul dragones descripción 2",
		price2: 4450,
		category: ["tops"],
		image: ["/ProductImages/Tops-Microtul/Top-Microtul-Dragones.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Vestido Liz",
		description:
			"Descripción Vestido Liz",
		price: 8300,
		description2: "Vestido Liz descripción 2",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Liz/Vestido-Liz-1.jpeg", "/ProductImages/Vestido-Liz/Vestido-Liz-2.jpeg", "/ProductImages/Vestido-Liz/Vestido-Liz-3.jpeg", "/ProductImages/Vestido-Liz/Vestido-Liz-4.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Jardinero Over",
		description:
			"Descripción Jardinero Over",
		price: 14800,
		description2: "Jardinero Over descripción 2",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Jardinero-Over/Jardinero-Over-1.jpeg", "/ProductImages/Jardinero-Over/Jardinero-Over-2.jpeg", "/ProductImages/Jardinero-Over/Jardinero-Over-Negro-1.jpeg", "/ProductImages/Jardinero-Over/Jardinero-Over-Negro-2.jpeg", "/ProductImages/Jardinero-Over/Jardinero-Over-Negro-3.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Vestido San Valentín",
		description: "Hecho en fibrana, tiene una caída preciosa con mucho peso por la cantidad de tela en las capas. Realmente no se llega a apreciar la calidad en fotos 🌿 (Al ser elastizado abarca muchos talles, elastiza un montón)",
		price: 8000,
		description2: "Manga larga precio alternativo",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-San-Valentin/Vestido-San-Valentin-1.jpeg", "/ProductImages/Vestido-San-Valentin/Vestido-San-Valentin-2.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Vestido San Valentín manga larga",
		description: "Hecho en fibrana, tiene una caída preciosa con mucho peso por la cantidad de tela en las capas. Realmente no se llega a apreciar la calidad en fotos 🌿 (Al ser elastizado abarca muchos talles, elastiza un montón)",
		price: 8700,
		description2: "Manga larga precio alternativo",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-San-Valentin/Vestido-San-Valentin-manga-larga-1.jpeg", "/ProductImages/Vestido-San-Valentin/Vestido-San-Valentin-manga-larga-2.jpeg", "/ProductImages/Vestido-San-Valentin/Vestido-San-Valentin-manga-larga-3.jpeg"],
		product_qty: 1,
		extra: "peitho"
	},
	{
		name: "Vestido Lexie",
		description:
			"Descripción Vestido Lexie",
		price: 8300,
		description2: "Vestido Lexie descripción 2",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Lexie/Vestido-Lexie-1.jpeg", "/ProductImages/Vestido-Lexie/Vestido-Lexie-2.jpeg", "/ProductImages/Vestido-Lexie/Vestido-Lexie-3.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Sweater Hongos",
		description:
			"Descripción Sweater Hongos",
		price: 10400,
		description2: "Sweater Hongos descripción 2",
		price2: 0,
		category: ["abrigos"],
		image: ["/ProductImages/Sweaters/Sweater-Hongo-1.jpeg", "/ProductImages/Sweaters/Sweater-Hongo-2.jpeg", "/ProductImages/Sweaters/Sweaters.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Sweater Nubes",
		description:
			"Descripción Sweater Nubes",
		price: 10400,
		description2: "Sweater Nubes descripción 2",
		price2: 0,
		category: ["abrigos"],
		image: ["/ProductImages/Sweaters/Sweater-Nube-1.jpeg", "/ProductImages/Sweaters/Sweater-Nube-2.jpeg", "/ProductImages/Sweaters/Sweater-Nube-3.jpeg", "/ProductImages/Sweaters/Sweaters.jpeg"],
		product_qty: 1,
		extra: "peithoCute"
	},
	{
		name: "Vestido Margot",
		description:
			"Descripción Vestido Margot",
		price: 8300,
		description2: "Vestido Margot descripción 2",
		price2: 0,
		category: ["vestidos"],
		image: ["/ProductImages/Vestido-Margot/Vestido-Margot-1.jpeg", "/ProductImages/Vestido-Margot/Vestido-Margot-2.jpeg", "/ProductImages/Vestido-Margot/Vestido-Margot-3.jpeg", "/ProductImages/Vestido-Margot/Vestido-Margot-4.jpeg", ],
		product_qty: 1,
		extra: "peithoCute"
	},
	// {
	// 	name: "Vestido Margot",
	// 	description:
	// 		"Descripción Vestido Margot",
	// 	price: 8300,
	// 	description2: "Vestido Margot descripción 2",
	// 	price2: 0,
	// 	category: ["vestidos"],
	// 	image: ["/ProductImages/Vestido-Margot/Vestido-Margot-1.jpeg" ],
	// 	product_qty: 1,
	// 	extra: "peithoCute"
	// },


	
];

module.exports = {
	products,
};
