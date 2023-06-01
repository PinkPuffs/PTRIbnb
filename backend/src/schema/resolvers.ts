const hosts = [
  {
    id: 1,
    fullName: 'Joe John',
    email: 'abc@test.com',
    userPic: 'hjksahkjdhaskd',
    availability: true,
    location: 'New York',
    description: 'I love hosting'
  },
  {
    id: 2,
    fullName: 'Amy Wu',
    email: 'amy@test.com',
    userPic: 'amydjksskd',
    availability: true,
    location: 'New York',
    description: 'I love traveling'
  },
  {
    id: 3,
    fullName: 'Jenn Lee',
    email: 'Jenn@test.com',
    userPic: 'jennsahkjdhaskd',
    availability: true,
    location: 'New York',
    description: 'I love cooking'
  }
]

const resolvers = {
  Query: {
    createHost: (args) => {  //args{email, pw}
      const { email, pw } = args;
      //check if email already exists

        //if so, return a string message('Account already exist, try to Lgin!') redirect to login
        //else create add the info to db, and return a message('Succussfully created your account!')
    }
  }
}

export default resolvers;