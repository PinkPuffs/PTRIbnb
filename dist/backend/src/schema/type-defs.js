const typeDefs = `#graphql

type Query {
  hosts: [Host]
  host(id: ID!): Host
}

type Host {
  id: ID!
  fullName: String!
  email: String!
  userPic: String
  availability: Boolean
  location: String!
  description: String!
}

type Guest {
  id: ID!
  fullName: String!
  email: String!
  userPic: String
}

type Trip {
  id: ID!
  hostId: ID!
  guestId: ID!
  arrival: String!
  departure: String!
  confirmation: Boolean
}
`;
export default typeDefs;
