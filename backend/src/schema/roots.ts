import { GraphQLError } from "graphql";
import pool from "../model/dbConnect";
import { hosts, guests, trips } from '../model/dummyDB';

// catch (err) {
//   console.log('Error in verifyHostLogin: ', err);
//   throw new GraphQLError("Invalid argument value", {
//     extensions: {
//       code: "BAD_USER_INPUT",
//     },
//   });
// }
const root = {
  verifyHostLogin: ({ email, pw }: { email: any, pw: any }) => {
    console.log("H-email:", email, "H-pw:", pw);
    for (let i = 0; i < hosts.length; i++) {
      if (hosts[i].email === email && hosts[i].password === pw){
        return hosts[i];
      } else {
        return 'Invalid Credential'
    }
  }
  },

  verifyGuestLogin: ({ email, pw }: { email: any, pw: any }) => {
    console.log("G-email:", email, "G-pw:", pw);
    for(let i = 0; i < guests.length; i ++) {
      if(guests[i].email === email && guests[i].password === pw) return guests[i];
      return 'Invalid Credential'
    }
  }
};

export default root;
