const Pool = require("pg");

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

console.table({
  PGDATABASE,
  PGHOST,
  PGPASSWORD,
  PGPORT,
  PGUSER,
});

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool.query("SELECT * from users", (err: Error, result: any) => {
  if (err) {
    console.error(err);
  }
  console.log(result.rows[0]);
});

export const db = {
  query: (text: string, params: any[]) => pool.query(text, params),
};
