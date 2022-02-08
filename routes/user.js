import express from "express";
import db from "../db.js";
const router = express.Router();

router.get('/',async (req,res) => {
  const date = await db.query('SELECT now()');
  res.send(`Date now: ${date[0].now}`);
})

export default router;
