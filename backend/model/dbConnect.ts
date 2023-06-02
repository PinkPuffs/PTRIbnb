import { Pool } from 'pg'

const PG_URI = process.env.PG_URI

const pool = new Pool({
  connectionString: PG_URI
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
})

export default pool
