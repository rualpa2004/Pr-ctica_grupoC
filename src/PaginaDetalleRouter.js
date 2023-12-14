import express from 'express';
import * as productoService from './productoService.js';
import {mostrarMagos} from "./productoService.js";

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { 
        detalles: productoService.getAllElements() 
    });
});

router.post('/pagina_detalle_grupoc', (req, res) => {

    productoService.addElement({ newNombre, newDescripcion, newPrecio, newEfectosSecundarios ,newImagen, Leche, Cacao, Avellanas });
    
    res.render('pagina_detalle_grupoc',{listaMagos: productoService.mostrarMagos()});
});

router.get('/pagina_detalle_grupoc/:id', (req, res) => {

    const elements = productoService.getElementbByID(req.params.id);

    res.render('pagina_detalle_grupoc', { elements });
});

router.get('/pagina_detalle_grupoc/:id/delete', (req, res) => {

    productoService.deleteElementByID(req.params.id);

    res.redirect('/');
});


router.get('/pagina_detalle_grupoc',(req,res) => {
    console.log(req.body);
    res.render('pagina_detalle_grupoc');
})

router.post('/nuevoMago/:id', (req, res) => {
    let { numMagoNuevo, newNombreMago, newDescripcion } = req.body;
    productoService.nuevoMago({ id: req.params.id, numMagoNuevo, newNombreMago, newDescripcion });
    res.render(`pagina_detalle_grupo/${req.params.id}`);
});

router.post('/GuardarMago',(req,res) => {
    const nuevoMago = req.body;
    const elements = productoService.getElementbByID(req.params.id);
    productoService.nuevoMago(nuevoMago);
    console.log(nuevoMago);
    res.render(`pagina_detalle_grupoc/${elements.id}`,(nuevoMago));
})


router.get('/pagina_detalle_grupoc/:id/editar',(req,res) => {
    //Redirect to nuevoelemento/:id
    const id = req.params.id;
    res.redirect(`/${id}`);

})

router.get('pagina_detalle_grupoc/:id/delete', (req,res) => {
    const id = req.params.id;
    const borrado = productoService.deleteElementByID(id);
    if(!borrado){
        res.status(404).send('elemento no encontrado');
    }
    else{
        res.redirect('/');
    }
})

router.post('/borrado', (req,res) => {
    productoService.deleteElementByID(elementId);
    res.redirect('');
})

router.get('/mostrarMagos/:id', (req, res) => {
    let arrayMagos = productoService.mostrarMagos({ id: req.params.id }); // Corregir la sintaxis pasando un objeto con la clave 'id'
    res.render('pagina_detalle_grupoc/${req.params.id }', { magos: arrayMagos }); // Supongamos que 'nombre_de_la_vista' es el nombre de la plantilla que mostrarÃ¡ los magos
});
export default router;