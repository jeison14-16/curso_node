const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//RutasWeb
app.use('/api', require('./router/RutasWeb'));

app.listen(port, ()=>{
    console.log('Servidor express a su servicio en el puerto', port)
})
app.use((req, res, next) => {
    res.status(404).render("404",{
        
        titulo: "404",
        descripcion: "Titulo de la pagina 404"
    })
})