//const express = require('express')
//var  exphbs = require('express-handlebars');
 
 
//const path =  require('path')
//const app = express()
// const port = 3000

 //app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

//app.use(express.static(path.join(__dirname, "static")))  
//app.use('/',require(path.join(__dirname, 'routes/blog.js')))
 

//app.listen(port, () => {
 // console.log(`Blog app listening on port http://localhost:${port}`)
//})














/*

 const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// Set up Handlebars as the template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
*/

const express = require('express');
const { engine } = require('express-handlebars');
 
 const path = require('path')
const app = express()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))
 

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})