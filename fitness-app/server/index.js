const express = require('express');
const cors = require('cors');
const app = express();
const exerciseRoute = require('./routes/exerciseRoutes');
const PORT = 8080;

app.use(cors());

app.use('/exercises', exerciseRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});