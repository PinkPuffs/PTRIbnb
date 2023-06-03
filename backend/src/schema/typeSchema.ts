import { buildSchema } from "graphql";

const schema = buildSchema(`


enum City {
  New York
  Los Angeles
  Las Vegas
  Boston
  Colorado
  Seattle 
  Dallas
}

type Query {
# create user
  createHost(id: ID!, email: String!, pw: String!): String
  createGuest(id: ID!, email: String!, pw: String!): String

# user(guest/host) login
  verifyHostLogin(email: String!, pw: String!): Host
  verifyGuestLogin(email: String!, pw: String!): Guest

# guest browsing Host lists
  getHosts(location: City): [Host]

# query individual Host/Guest
  host(id: ID!): Host
  guest(id: ID!): Guest
}

#type Mutation {
# update user info
# updateHost(id:ID!, full_name: Sting, userpic: String, location: City, description: String): Host
# updateGuest(id: ID!, full_name: String, userpic: String): Guest
#}

type Host {
  id: ID
  full_name: String
  email: String!
  password: String!
  userPic: String
  availability: Boolean
  location: String
  description: String
}

type Guest {
  id: ID
  full_name: String
  email: String!
  password: String!
  userPic: String
}

type Trip {
  id: ID!
  host_id: ID!
  guest_id: ID!
  arrival: String!
  departure: String!
  confirmation: Boolean
}
`);

export default schema;
