const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

const userRoute = require('./routes/userRoute')



const app = express();
app.use(cors());
app.use(express.json())
const port = 5000;

app.use('/api/user', userRoute);


// MongoDB setup and connection
mongoose.connect('mongodb+srv://prateekpranveer:root@dikshant-c.hsvetcj.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

