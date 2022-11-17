const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.get('/', (req, res) => {
  console.log("Server is running");
  res.send('Server is running');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${process.env.PORT || 5000}`);
});