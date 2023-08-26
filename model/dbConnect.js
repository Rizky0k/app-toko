const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/toko', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})