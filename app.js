const express = require("express");
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors({
  // origin: 'http://localhost:61220' 
  // origin: 'http://192.168.43.232:'
  origin: 'http://192.168.43.60:'
   // Ganti dengan origin aplikasi Flutter Anda
}));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/sensor", require("./routers/route"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require('express');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors({
//   origin: 'http://192.168.7.52:' // Ganti dengan origin aplikasi Flutter Anda
// }));

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/sensor', require('./routers/route'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
