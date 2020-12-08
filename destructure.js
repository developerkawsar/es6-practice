const person = { name: "Jack-William", age: 17, Job: "Facebooker", gfName: "Ema-watson", address: "kocukhet", phone: "000000985935", friends:["tom hancks", "tom cruise", "tom yarn"]};

const {phone} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);
//  const girlFriend = person.gfName;
// const phoneNum = person.phone;
// console.log(girlFriend, phone, salary, address);
// console.log(girlFriend, phone, salary, address);

const friends = ['salman khan', 'sharuk khan', 'fahim khan', 'aamir khan', 'saif khain', 'asif khan'];
const [chotoFriend, nextFriend, ...olders] = friends;
// console.log(olders);