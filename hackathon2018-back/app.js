const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const consts = require('./consts');

const app = express();
const port = 3000;

app.use(cors());
mongoose.connect(consts.consts.databaseURI, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
  if(err){
    console.log(`Database error: ${err}`);
  }else{
    console.log('Connected to database.');
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


app.get('/', (req, res) => {
  return res.json('Repass');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  }
);