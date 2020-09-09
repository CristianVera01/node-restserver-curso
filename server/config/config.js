// ==============================
// PUERTO
// ==============================
process.env.PORT = process.env.PORT || 3000;

// ==============================
// PUERTO
// ==============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==============================
// BASE DE DATOS
// ==============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cristian:i08fz7VONKygJJZ9@cluster0.9f0ei.mongodb.net/cafe';
}

process.env.URLDB = urlDB;