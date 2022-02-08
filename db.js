import pgp from "pg-promise";
import "dotenv/config.js";

const db = pgp()(process.env.DBCONNECTIONSTRING);

export default db;
