import { GraphQLError } from "graphql";

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
    createHost: async (args) => {//args{email, pw}
      // Custom Error handling
      try {
        const { email, pw } = args;
        //check if email already exists
        const query = "SELECT * FROM hosts WHERE email = $1;";
        const param = email;
        let result = await pool.query(query, param);

        //if not, create add the info to db, and return a message('Succussfully created your account!')
        if (result.row.length === 0) {
          const newQuery = "INSERT INTO hosts (email, password) VALUES ($1, $2);";

          result = await pool.query(newQuery, [email, pw]);
          return "Succussfully created your account!";
          //otherwise return a string message('Account already exist, try to Lgin!') redirect to login
        } else if (query === param) {
          return `Account ${query} already exist, try to Lgin!`;
        }
      } catch (err) {
        console.log(err);
        throw new GraphQLError("Invalid argument value", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
    createGuest: async (args) => {
      // Custom Error handling
    try{
    const { email, pw } = args;
    //check if email already exists
    const query = "SELECT * FROM guests WHERE email = $1;";
    const param = email;
    let result = await pool.query(query, param);

    //if not, create add the info to db, and return a message('Succussfully created your account!')
    if (result.row.length === 0) {
    const newQuery = "INSERT INTO guests (email, password) VALUES ($1, $2);";

    result = await pool.query(newQuery, [email, pw]);
    return "Succussfully created your account!";
    //otherwise return a string message('Account already exist, try to Lgin!') redirect to login
    } else if (query === param) {
    return `Account ${query} already exist, try to Lgin!`;
    }

    } catch (err) {
    console.log(err);
    throw new GraphQLError("Invalid argument value", {
    extensions: {
      code: "BAD_USER_INPUT",
    },
    });
    }

      }
    },
    hostLogIn: async (_, args) => {
      try{

        const { email, pw } = args;
        const query = "SELECT email, password FROM hosts WHERE email = $1, password = $2;";
        let result = await Pool.query(query, [email, pw]);
        

      } catch (err) {
        throw new GraphQLError("Invalid argument value", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
      
    },
    guestLogIn: async (_, args) => {
      if (args.email.length <= 5 || args.pw.length <= 4) {
        throw new GraphQLError("Invalid argument value", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      } else {
      }
    },
  },
};

export default resolvers;
