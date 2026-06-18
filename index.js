const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.json({
		message: 'microservicio para el diplomado de Arquitectura de Software.',
		status: 'OK',
		name: 'Microservicio Unisabana',
	})
});

app.listen(port, () => {
	console.log(`Microservicio ejecutándose en el puerto ${port}`);
});
