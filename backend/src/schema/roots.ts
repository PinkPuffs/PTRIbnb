import { GraphQLError } from "graphql";
import pool from "../model/dbConnect";
import { hosts, guests, trips } from "../model/dummyDB";

const root = {
  createHost: async ({
    id,
    email,
    pw,
  }: {
    id: any;
    email: string;
    pw: string;
  }) => {
    console.log("inside createHost!");
    console.log("H-Input-email:", email, "H-Input-pw:", pw);
    //check if email is in use
    const qmsg = "SELECT email FROM hosts WHERE email = $1;";
    let user = await pool.query(qmsg, [email]);
    if (user.rows[0]) {
      return "This email is in used, try another one";
    } else {
      const newwQ = "INSERT INTO hosts(id,email, password) VALUES($1,$2,$3);";
      user = await pool.query(newwQ, [id, email, pw]);
      return "Succussfully created user!";
    }
  },
  createGuest: async ({
    id,
    email,
    pw,
  }: {
    id: any;
    email: string;
    pw: string;
  }) => {
    console.log("inside createHost!");
    console.log("H-Input-email:", email, "H-Input-pw:", pw);
    //check if email is in use
    const qmsg = "SELECT email FROM guests WHERE email = $1;";
    let user = await pool.query(qmsg, [email]);
    if (user.rows[0]) {
      return "This email is in used, try another one";
    } else {
      const newwQ = "INSERT INTO guests(id,email, password) VALUES($1,$2,$3);";
      user = await pool.query(newwQ, [id, email, pw]);
      return "Succussfully created user!";
    }
  },

  verifyHostLogin: async ({ email, pw }: { email: string; pw: string }) => {
    console.log("inside verify host login!");
    console.log("H-email:", email, "H-pw:", pw);
    const qmsg = "SELECT * FROM hosts WHERE email = $1 AND password = $2;";

    const result = await pool.query(qmsg, [email, pw]);
    if (result.rows.length !== 0) {
      console.log("result:", result.rows[0]);
      return result.rows[0];
    }
  },

  verifyGuestLogin: async ({ email, pw }: { email: any; pw: any }) => {
    console.log("inside verify guest login!");
    console.log("G-email:", email, "G-pw:", pw);
    const qmsg = "SELECT * FROM guests WHERE email = $1 AND password = $2;";

    const result = await pool.query(qmsg, [email, pw]);
    if (result.rows.length !== 0) {
      console.log("result:", result.rows[0]);
      return result.rows[0];
    }
  },

  getHosts: async ({ location }: { location: any }) => {
    console.log("Inside getHosts!");
    const qmsg = "SELECT * FROM hosts WHERE location= $1;";
    // location = location.toString();
    const result = await pool.query(qmsg, [location.toString()]);
    console.log(result.rows)
    if (result.rows.length > 0) {
      return result.rows;
    }
  },

  host: async({id}: {id: number}) => {
    console.log("Inside host!");
    const qmsg = "SELECT * FROM hosts WHERE id= $1;";
    const result = await pool.query(qmsg, [id]);
    return result.rows[0];
  },

  guest: async({id}: {id: number}) => {
    console.log("Inside guest!");
    const qmsg = "SELECT * FROM guests WHERE id= $1;";
    const result = await pool.query(qmsg, [id]);
    return result.rows[0];
  },
};

export default root;
