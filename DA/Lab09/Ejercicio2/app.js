const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;
const db = mysql.createConnection({
    host: 'localhost',  // Cambia si usas otro host
    user: 'root',       // Tu usuario de MySQL
    password: 'password', // Cambia a tu contraseña de MySQL
    database: 'archivo_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const specialty = req.body.specialty;
        const dir = `./uploads/${specialty}`;
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });
app.use(express.static('.'));
app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
    const { specialty } = req.body;
    const fileName = req.file.originalname;
    const filePath = path.join('uploads', specialty, fileName);
    const query = 'INSERT INTO archivos (nombre, especialidad, ruta) VALUES (?, ?, ?)';
    db.query(query, [fileName, specialty, filePath], (err, result) => {
        if (err) {
            console.error('Error al guardar en la base de datos:', err);
            return res.status(500).send('Error al guardar en la base de datos');
        }
        res.send('Archivo cargado y registrado en la base de datos');
    });
});

// Ruta para obtener archivos por especialidad
app.get('/files/:specialty', (req, res) => {
    const { specialty } = req.params;

    // Consultar la base de datos para obtener los archivos de la especialidad
    const query = 'SELECT nombre FROM archivos WHERE especialidad = ?';
    db.query(query, [specialty], (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return res.status(500).send('Error al consultar la base de datos');
        }
        res.json(results.map(result => result.nombre));
    });
});

// Ruta para mostrar el archivo seleccionado
app.get('/file/:specialty/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.specialty, req.params.filename);
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
