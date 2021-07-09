const express = require('express');
const app = express();

const port = 3000;

// Motor de Plantillas
app.set('view engine', 'ejs');
app.set('views', './views'); //Especifica la carpeta de las Vistas!


// MiddleWare
app.use(express.static(__dirname + "/public"));


//     RUTAS     RUTAS     RUTAS     RUTAS     RUTAS
app.get('/', (req, res) => {
    res.render('index', {titulo: "Inicio"});
})


// MiddleWare Erroes
app.use((req, res, next)=>{
    res.status(404).render("404",{
        titulo: "Error 404",
        descripcion: "Pagina no encontrada"
    })
})


app.listen(port, ()=>{
    console.log('Servidor Listo en puerto: ', port);
})