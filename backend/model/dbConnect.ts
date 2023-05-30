import { Pool } from 'pg'

const PG_URI = 'postgres://wbwwdvzc:xV-KG6VJr2aOyeATlFsQTPeLi6CLXJ8m@mahmud.db.elephantsql.com/wbwwdvzc'

const pool = new Pool({
  connectionString: PG_URI
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
})

export default pool
