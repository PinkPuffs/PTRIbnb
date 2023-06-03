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
#  createHost: String
# createGuest: String

# user(guest/host) login
  verifyHostLogin(email: String!, pw: String!): Host
  verifyGuestLogIn(email: String!, pw: String!): Guest
# guest browsing Host lists
  getHosts(location: City): [Host]
# query individual Host/Guest
  host(id: ID!): Host
  guest(id: ID!): Guest
}

type Host {
  id: ID!
  fullName: String!
  email: String!
  password: String!
  userPic: String
  availability: Boolean
  location: String!
  description: String!
  trips: Trip
}

type Guest {
  id: ID!
  fullName: String!
  email: String!
  password: String!
  userPic: String
  trips: Trip
}

type Trip {
  id: ID!
  hostId: ID!
  guestId: ID!
  arrival: String!
  departure: String!
  confirmation: Boolean
}
`)


export default schema;