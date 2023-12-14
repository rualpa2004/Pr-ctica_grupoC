import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import nuevoElementoRouter from './nuevoElementoRouter.js';
import PaginaDetalleRouter from './PaginaDetalleRouter.js';

const app = express();

app.set('views', __dirname + '/../views');
app.set('view engine', 'html');
// Configurar EJS como motor de plantillas

app.engine('html', mustacheExpress(), ".html");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.use('/', nuevoElementoRouter);
app.use('/', PaginaDetalleRouter);

app.listen(3000, () => console.log('Listening on port 3000!'));