import express from "express"

const app = express()

app.use('/', (req, res) => {
    res.send('Hola Mundo')
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})