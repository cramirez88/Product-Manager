const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;
const productRoutes = require('./routes/product.routes')
productRoutes(app)
app.use(cors())


    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
