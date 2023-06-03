import { Pool } from "pg";

const PG_URI =
  "postgres://rotidjzd:liSWzMR0Fd7TIxqG81grgH1_fEAyTeVh@mahmud.db.elephantsql.com/rotidjzd";

const pool = new Pool({
  // user: 'rotidjzd',
  // host: 'localhost',
  // database: 'rotidjzd',
  connectionString: PG_URI,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

export default pool;
