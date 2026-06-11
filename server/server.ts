import express from "express";
import cors from "cors";
import sql from "mssql/msnodesqlv8";
import dbConfig from "./config/db";

// Loome Express rakenduse
const app = express();

// Lubab frontendil teha päringuid backendile
app.use(cors());

// Lubab serveril lugeda JSON formaadis andmeid
app.use(express.json());

// Test route, et kontrollida kas backend töötab
app.get("/", (req, res) => {
  res.send("CodeCat API töötab");
});

// Kontrollime andmebaasi ühendust
sql.connect(dbConfig)
  .then(() => {
    console.log("Andmebaasiga ühendus loodud");
  })
  .catch((err) => {
    console.error("Andmebaasi ühenduse viga:", err);
  });

// Server hakkab töötama pordil 4000
app.listen(4000, () => {
  console.log("Server töötab pordil 4000");
});