const express = require('express');


const app = express();
//mongo connecting

app.get('/', (req, res) => {
	res.send('API running');
	console.log(req.url);
	//console.log(data);
});
app.use(function(req, res, next) {
	res.status('404').send("Sorry, that route doesn't exist. Have a nice day :)");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server had started on port ${PORT}`));