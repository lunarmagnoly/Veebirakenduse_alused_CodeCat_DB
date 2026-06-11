import { Router } from "express";
import sql from "mssql/msnodesqlv8";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM Tasks");

    res.json(result.recordset);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Andmete laadimine ebaõnnestus",
    });
  }
});

export default router;