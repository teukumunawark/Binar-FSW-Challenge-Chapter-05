require("dotenv").config();
const express = require('express');
const routes = require('./service/routes');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${process.env.PORT || 5000}`);
});