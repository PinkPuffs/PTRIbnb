import { Pool } from "pg";

const PG_URI =
  "postgres://rotidjzd:liSWzMR0Fd7TIxqG81grgH1_fEAyTeVh@mahmud.db.elephantsql.com/rotidjzd";

const pool = new Pool({
  connectionString: PG_URI,
});

// const client = await pool.connect();

// pool.on('connect',() => {
//   console.log('DB connected!')
// });

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

export default pool;
