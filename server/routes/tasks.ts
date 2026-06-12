import { Router } from "express";
import sql from "mssql/msnodesqlv8";

const router = Router();

//select
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

//insert
router.post("/", async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    await sql.query`
      INSERT INTO Tasks (
        Title,
        Description,
        Status,
        Priority,
        DueDate
      )
      VALUES (
        ${title},
        ${description},
        ${status},
        ${priority},
        ${dueDate}
      )
    `;

    res.status(201).json({
      message: "Task lisatud",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Taski lisamine ebaõnnestus",
    });
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const { title, description, status, priority, dueDate, completedDate } = req.body;
    const { id } = req.params;

    await sql.query`
      UPDATE Tasks
      SET
        Title = ${title},
        Description = ${description},
        Status = ${status},
        Priority = ${priority},
        DueDate = ${dueDate},
        CompletedDate = ${completedDate}
      WHERE Id = ${id}
    `;

    res.json({
      message: "Task uuendatud",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Taski uuendamine ebaõnnestus",
    });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await sql.query`
      DELETE FROM Tasks
      WHERE Id = ${id}
    `;

    res.json({
      message: "Task kustutatud",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Taski kustutamine ebaõnnestus",
    });
  }
});

export default router;