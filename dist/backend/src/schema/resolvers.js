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
];
const resolvers = {
    Query: {
        hosts: () => hosts
    }
};
export default resolvers;
