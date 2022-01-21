const person = {
    name: 'Jack William',
    age: 25,
    job: 'facebooker',
    gfName: 'Ema Watson',
    friends: ['tom hancks', 'tom cruse', 'tom jony'],
    phone: '01767524525'
};

// destructure
// const gfName = person.gfName;
// const phone = person.phone;

// or 
const {phone, gfName, friends} = person;


console.log(gfName, phone, friends[1]);
console.log(gfName, phone, friends);
console.log(gfName, phone, friends);
console.log(gfName, phone, friends);


const complexObject = {
  name: "abc",
  info: {
    address: "Kola Bagan",
    leader: "Tiger Leader",
  },
};

const {leader} = complexObject.info;
console.log(leader);




const friend = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriend, nextFriend, ...restFriends] = friend;
console.log(restFriends);
console.log(chotoFriend, nextFriend);
