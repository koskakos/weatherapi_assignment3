const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
const checkRole = require('./middleware/checkRoleMiddleware')
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const indexRouter = require('./routes/index');


const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb+srv://koskakos:12345@cluster0.ogigjhg.mongodb.net/weather',
    { useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority' }, })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/', authRouter);
app.use('/admin', checkRole(), adminRouter);
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
