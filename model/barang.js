const mongoose = require('mongoose');

// Create scheme
const BarangSchema = new mongoose.Schema(
    {
        nama: {
            type: String,
            required: true,
        },
        harga: {
            type: Number,
            required: true,
        }
    }
)
const Barang = mongoose.model('Barang', BarangSchema)

module.exports = Barang;