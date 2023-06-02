import { GraphQLError } from "graphql";
import pool from "../model/dbConnect";

const hosts = [
  {
    id: 1,
    fullName: "Joe John",
    email: "abc@test.com",
    userPic: "hjksahkjdhaskd",
    availability: true,
    location: "New York",
    description: "I love hosting",
  },
  {
    id: 2,
    fullName: "Amy Wu",
    email: "amy@test.com",
    userPic: "amydjksskd",
    availability: true,
    location: "New York",
    description: "I love traveling",
  },
  {
    id: 3,
    fullName: "Jenn Lee",
    email: "Jenn@test.com",
    userPic: "jennsahkjdhaskd",
    availability: true,
    location: "New York",
    description: "I love cooking",
  },
];

const resolvers = {
  Query: {
    createHost: async (args) => {
      //args{email, pw}
      // Custom Error handling
      try {
        const { email, pw } = args;
        //check if email already exists
        const query = "SELECT * FROM hosts WHERE email = $1;";
        let result = await pool.query(query,[email]);

        //if not, create add the info to db, and return a message('Succussfully created your account!')
        if (result.rows.length === 0) {
          const newQuery = "INSERT INTO hosts (email, password) VALUES ($1, $2);";
          result = await pool.query(newQuery, [email, pw]);
          return "Succussfully created your account!";
          //otherwise return a string message('Account already exist, try to Lgin!') redirect to login
        } else if (result.rows[0].email === email) {
          return `Account ${email} already exist, try to Lgin!`;
        }
      } catch (err) {
        console.log('Error in createHost: ', err);
        throw new GraphQLError("Invalid argument value", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
    createGuest: async (args) => {
      // Custom Error handling
      try {
        const { email, pw } = args;
        //check if email already exists
        const query = "SELECT * FROM guests WHERE email = $1;";
        let result = await pool.query(query, [email]);
        //if not, create add the info to db, and return a message('Succussfully created your account!')
        if (result.rows.length === 0) {
          const newQuery = "INSERT INTO guests (email, password) VALUES ($1, $2);";
          result = await pool.query(newQuery, [email, pw]);
          return "Succussfully created your account!";
          //otherwise return a string message('Account already exist, try to Lgin!') redirect to login
        } else if (result.rows[0].email === email ) {
          return `Account ${email} already exist, try to Lgin!`;
        }
      } catch (err) {
        console.log('Error in createGuest: ', err);
        throw new GraphQLError("Invalid argument value", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
  },
  verifyHostLogin: async (_, args, contextValue) => {
    try {
      const { email, pw } = args;
      const { res } = contextValue.contextFunc
      const query = "SELECT email, password FROM hosts WHERE email = $1, password = $2;";
      let result = await pool.query(query, [email, pw]);

      if (result.rows[0].email === email && result.rows[0].password === pw) {
        res.cookie('token', 'host');
        return 'Valid cridential, access granted.'
      }
    } catch (err) {
      console.log('Error in verifyHostLogin: ', err);
      throw new GraphQLError("Invalid argument value", {
        extensions: {
          code: "BAD_USER_INPUT",
        },
      });
    }
  },
  verifyGuestLogIn: async (_, args, contextValue) => {
  try{
      const { email, pw } = args;
      const { res } = contextValue.contextFunc
      const query = "SELECT email, password FROM guests WHERE email = $1, password = $2;";
      let result = await pool.query(query, [email, pw]);

      if (result.rows[0].email === email && result.rows[0].password === pw) {
        res.cookie('token', 'guest');
        return 'Valid cridential, access granted.'
      }
  } catch (err) {
    console.log('Error in verifyGuestLogin: ', err);
    throw new GraphQLError("Invalid argument value", {
      extensions: {
        code: "BAD_USER_INPUT",
      },
    });
  }
  }, // Guest accessing Host list based on the Host location/City
  getHosts:async (_, args, contextValue) => {
    try{
      const { location } =  args;
      const { req } = contextValue.contextFunc;

      // check if guest is loged in
      if(req.cookies.token === 'guest'){
        const query = " SELECT * FROM hosts WHERE location = $1;"
       return await pool.query(query, [location]);

      }
    } catch (err) {
      console.log('Error in getHosts: ', err);
      throw new GraphQLError("Please log in to see Host lists in your destination", {
        extensions: {
          code: "BAD_USER_INPUT",
        },
      });
    }
    
  }
};

export default resolvers;
