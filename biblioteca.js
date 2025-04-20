const fs = require ('fs'); 

const biblioteca = [

	{
		id: 1,
		titulo: "Cien años de soledad",
		autor: {
			nombre: "Gabriel",
			apellido: "García Marquez",
			nacionalidad: "Colombiana"
		},

		publicación: 1967,
		genero: ["Realismo mágico", "Ficción", "Noovela"],
		disponibles : 5,
		prestados: 2
	},

	{
		id: 2,
		titulo: "1984",
		autor: {
			nombre: "George",
			apellido: "Orwell",
			nacionalidad: "Británica"
		},
		publicación: 1949,
		genero : ["Distopía", "Ciencia Ficción", "Novela"],
		disponibles: 3,
		prestados: 4
	},

	{
		id: 3,
		titulo: "Don Quijote de la Mancha",
		autor: {
			nombre: "Miguel",
			apellido: "de Cervantes",
			nacionalidad: "Española"
		},
		publiación: 1605,
		genero: ["Novela", "Sátira", "Aventura"],
		disponibles: 4,
		prestados: 1
	},

	{
		id: 4,
		titulo: "La isla de las Musas",
		autor: {
			nombre: "Verónica",
			apellido: "García Peña",
			nacionalidad: "Española"
		},
		
		publicación: 2018,
		genero: ["Thriller psicológico", "Misterio", "Suspenso", "Novela psicológica"],
		disponibles: 3,
		prestados: 5
	}
];

const bibliotecaJSON = JSON.stringify(biblioteca, null, 2);

fs.writeFile('biblioteca.json', bibliotecaJSON, (err) => {

	if(err) {

		console.error('Error al guardar el archivo:' , err);
		return;
	}
	console.log('Archivo biblioteca.json guardado exitosamente'); 

	fs.readFile('biblioteca.json', 'utf8', (err, data) => {

		if(err) {
			console.error('Error al leer el archivo:' , err);
			return;
		}

		try {
			const bibliotecaParseada = JSON.parse(data);
			console.log('Contenido del archivo parseado:');
			console.log(bibliotecaParseada);
		} catch (parseErr) {
			console.error('Error al parsear el JSON:' , parseErr); 
		}
	});
});




