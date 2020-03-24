const express = require('express');
const path = require('path');
//const bodyParser = require('body-parser');
//const fetch = require('fetch-node');

const app = express();

//const urlencodedParser = bodyParser.urlencoded({extended: false});
  
app.get('/', (req: Request, res: any) => {
	res.send('API running');
})

// fetch('https://reqres.in/api/users').then(res => {
// 	return res.json()
// }).then(json => {
// 	console.log(json)
// })
// app.post('https://reqres.in/api/users', (req, res) => {
//     console.log(req.body);
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));