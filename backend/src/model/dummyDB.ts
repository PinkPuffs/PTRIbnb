const hosts = [
  {
    id: 1,
    fullName: "Joe John",
    email: "abc@test.com",
    password: 'abc123',
    userPic: "hjksahkjdhaskd",
    availability: true,
    location: 'New York',
    description: "I love hosting",
    trips: null
  },
  {
    id: 2,
    fullName: "Amy Wu",
    email: "amy@test.com",
    password: 'abc123',
    userPic: "amydjksskd",
    availability: true,
    location: "New York",
    description: "I love traveling",
    trips: null
  },
  {
    id: 3,
    fullName: "Jenn Lee",
    email: "Jenn@test.com",
    password: 'abc123',
    userPic: "jennsahkjdhaskd",
    availability: true,
    location: "New York",
    description: "I love cooking",
    trips: null
  },
];

const guests = [
  {
    id: 10,
    fullName: "John Wick",
    email: "Wick@test.com",
    password: 'abc123',
    userPic: "hjksahkjdhaskd",
    trips: null
  },
  {
    id: 20,
    fullName: "Elsa",
    email: "Elsa@test.com",
    password: 'abc123',
    userPic: "amydjksskd",
    trips: null
  },
  {
    id: 30,
    fullName: "Ariel",
    email: "Ariel@test.com",
    password: 'abc123',
    userPic: "jennsahkjdhaskd",
    trips: null
  },
];

const trips = [
  {
    id: 101,
    hostId: 1,
    guestId:10,
    arrival: '06-10-2023',
    departure: '06-15-2023',
    confirmation: true,
  },
  {
    id: 102,
    hostId: 2,
    guestId:20,
    arrival: '08-10-2023',
    departure: '08-15-2023',
    confirmation: true,
  },
  {
    id: 103,
    hostId: 3,
    guestId:30,
    arrival: '09-10-2023',
    departure: '09-15-2023',
    confirmation: true,
  },
]
export { hosts, guests, trips }